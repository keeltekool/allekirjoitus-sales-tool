# Organizational Structure & Roles

Your signing platform mirrors your real company structure through a four-level hierarchy with role-based access control, ensuring every employee sees exactly the documents they should - and nothing more.

- **The four hierarchy levels** - **Tenant** is your organization's dedicated, isolated environment. Within it, **Departments** represent your actual business units (Finance, HR, Legal, Sales). Below departments, **Groups** map directly to your Active Directory groups and are the recommended unit for assigning permissions. **Users** are individuals placed within these groups. This structure supports any organizational complexity, from a single-department setup to a multi-division enterprise

- **What each role can see and do** - **Organization Admin** has full visibility across the entire tenant and all departments below them, plus user management capabilities. **Department Admin** can see all signature requests created by anyone within their assigned department, providing managerial oversight. **Department User** has the most restricted scope and can only see and manage requests they created themselves

- **Document visibility is strictly scoped** - users and admins in Department A cannot see signature requests in Department B. Permissions are enforced through group assignments, and each group is restricted to a single department. An optional configuration can control whether requests created at a parent department level cascade down to be visible to sub-departments

- **Multi-department setups** - large enterprises use multiple departments to maintain internal data privacy and separation of duties. Aktia Bank splits its tenant into departments for Retail Banking, Corporate Banking, and Mortgages. Fennia Insurance isolates workflows by Sales, Claims, and Underwriting. This ensures that sensitive HR documents, for example, are only accessible to the specific subset of HR users, while commercial contracts stay within the Sales department's scope

- **AD integration** - when SSO is configured, users are automatically placed into the correct department and assigned the correct role based on their AD group claims, eliminating manual role management entirely
