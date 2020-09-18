package gr.team5.sacchon.security.dao;


import org.restlet.Context;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Objects;

/**
 * A class to configure the database
 * @author One-To-Fix-Them-All
 */
public class UserPersistence {
    private static UserPersistence userPersistence = new UserPersistence();
    private UserPersistence() {};

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