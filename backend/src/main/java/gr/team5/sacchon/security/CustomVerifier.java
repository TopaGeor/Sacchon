package gr.team5.sacchon.security;

import gr.team5.sacchon.security.dao.ApplicationUser;
import gr.team5.sacchon.security.dao.UserPersistence;
import org.restlet.Request;
import org.restlet.security.Role;
import org.restlet.security.SecretVerifier;

import java.sql.SQLException;

/**
 * verify the user credentials
 * @author One-To-Fix-Them-All
 */
public class CustomVerifier extends SecretVerifier {
    /**
     * checks if a password is correct
     * @param identifier how to find the user
     * @param secret the password that someone have use
     * @return enum valid or invalid
     */
    @Override
    public int verify (String identifier, char[] secret) {
        UserPersistence userPersistence =
                UserPersistence.getUserPersistence();

        ApplicationUser user = null;
        try {
            user = userPersistence.findByUsername(identifier);
        } catch (SQLException throwable){
            throwable.printStackTrace();
        }

        if ((user != null) &&
                compare(user.getPassword().toCharArray(), secret)){
            Request request = Request.getCurrent();
            // Lalilulelo -> change the Role constructor
            request.getClientInfo().getRoles().add(new Role(user.getRole().getRoleName()));
            return SecretVerifier.RESULT_VALID;
        } else {
            return SecretVerifier.RESULT_INVALID;
        }
    }
}