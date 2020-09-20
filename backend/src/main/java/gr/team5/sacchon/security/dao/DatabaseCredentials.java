package gr.team5.sacchon.security.dao;

/**
 * Database credentials,
 * you maybe need to configure them in you local machine
 */
public class DatabaseCredentials {
    public static final String URL = "jdbc:sqlserver://localhost;databaseName=sacchonDB;";
    public static final String USER = "sa";
    public static final String DRIVER = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
    public static final String PASSWORD = "admin1";
}