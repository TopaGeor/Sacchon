package gr.team5.sacchon.security.dao;


import org.restlet.Context;

import java.sql.*;
import java.util.Objects;

/**
 * A class to configure the database
 * And to set up the user
 * @author One-To-Fix-Them-All
 */
public class UserPersistence {
    private static UserPersistence userPersistence = new UserPersistence();
    private UserPersistence() {}

    /**
     * Finds a user by his username
     * @param username the user name of the user to find
     * @return the user
     * @throws SQLException if no user with username as name
     */
    public ApplicationUser findByUsername(String username) throws SQLException {
        Context.getCurrentLogger().finer(
                "Method findById of UserPersistence started"
        );

        Connection connection = null;
        try {
            connection = getConnection();
            PreparedStatement preparedStatement = connection
                    .prepareStatement("select * from UserTable where username=?");
            preparedStatement.setString(1, username);

            ResultSet rs = preparedStatement.executeQuery();
            if (rs.next()) {
                ApplicationUser user = new ApplicationUser();
                user.setUsername(rs.getString("username"));
                user.setUsername(rs.getString("password"));
                user.setUsername(rs.getString("role"));
                return user;
            }
            return null;
        } finally {
            releaseConnection(connection);
            Context.getCurrentLogger().finer("Method findById of UserPersistence ended");
        }
    }

    /** synchronized, is for multithreading only one thread has access to it **/
    public static synchronized UserPersistence getUserPersistence(){
        return userPersistence;
    }

    /**
     * Tries to establish a connection with database
     * @return returns the connection with database
     * @throws SQLException if it fails to connect with database
     */
    protected Connection getConnection() throws SQLException {
        Context.getCurrentLogger().finer("Get a new connection to database");
        Connection result = DriverManager
                .getConnection(
                    DatabaseCredentials.URL,
                    DatabaseCredentials.USER,
                    DatabaseCredentials.PASSWORD
                );
        Context.getCurrentLogger().finer("The connection has been established with database");
        return result;
    }

    /**
     * Release the connection with database
     * @param connection the connection to be released
     * @throws SQLException if something goes wrong with releasing the connection
     */
    protected void releaseConnection(Connection connection) throws SQLException{
        Context.getCurrentLogger().finer(
                "Release connection with: " + Objects.toString(connection)
        );

        if (connection != null){
            connection.close();
            Context.getCurrentLogger().finer(
                    "Connection released with: " + Objects.toString(connection)
            );
        }
    }
}