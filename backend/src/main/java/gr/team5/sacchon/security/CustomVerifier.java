package gr.team5.sacchon.security;

import org.restlet.security.SecretVerifier;

public class CustomVerifier extends SecretVerifier {

    @Override
    public int verify (String identifier, char[] secret) {
        //ApplicationUserPersistance applicationUserPersistance = ApplicationUserPersistance
        return 0;
    }
}
