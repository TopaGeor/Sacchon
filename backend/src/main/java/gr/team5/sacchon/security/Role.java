package gr.team5.sacchon.security;

/**
 * This an enumeration with the available roles
 */
public enum Role {
    /**
     *This is an enumeration for the available type of users
     * admin = 1
     * doctor = 2
     * patient = 3
     */
    ROLE_NA("n/a"),
    ROLE_CHIEF("admin"),
    ROLE_DOCTOR("doctor"),
    ROLE_PATIENT("patient");

    private final String roleName;

    Role(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName;
    }

    public static Role getRoleValue(String roleParameter) {
        for (Role role: Role.values()) {
            if (roleParameter.equals((role.getRoleName()))) {
                return role;
            }
        }
        return ROLE_NA;
    }
}