const User = ({name, email, phone, website}) => {
    return (
        <div className="border rounded shadow p-3 md:p-6">
            <h2 className="font-bold">{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
};

export default User;