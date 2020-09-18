package gr.team5.sacchon.security;

public enum Role {
    ROLE_NA("n/a"),
    ROLE_CHIEF("admin"),
    ROLE_DOCTOR("doctor"),
    ROLE_PATIENT("client");

    private final String roleName;

    Role(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName;
    }

    public static Role getRoleValue(String roleParameter) {
        for (Role role: Role.values()) {
            if (roleParameter.equals((role.getRoleName())))
                return role;
        }

        return ROLE_NA;
    }

}
