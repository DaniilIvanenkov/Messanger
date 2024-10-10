const Singin = () => {


    return (
        <div className="form-container">
            <h2>Authentication</h2>
            <label className="form-label" htmlFor="username">
                Username:
            </label>
            <input
                type="text"
                id="username"
                name="username"
                className="form-input"
                required
            />
            <label className="form-label" htmlFor="password">
                Password:
            </label>
            <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                required
            />
            <button type="submit" onClick={login}>
                In
            </button>
        </div>
    )
}

export default Singin 
