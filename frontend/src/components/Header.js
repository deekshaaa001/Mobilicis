export default function Header() {
    return (
        <>
            <div className="navbar">
                <div className="w-3/4">
                    <a href="/">
                        <img
                            height={40}
                            src="https://www.kindpng.com/picc/m/28-285415_react-native-svg-icon-hd-png-download.png"
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="w-1/4">
                    <div className="flex justify-end">
                        <a href="/query1">
                            <button className="btn">Query 1</button>
                        </a>
                        <a href="/query2">
                            <button className="btn">Query 2</button>
                        </a>
                        <a href="/query3">
                            <button className="btn">Query 3</button>
                        </a>
                        <a href="/query4">
                            <button className="btn">Query 4</button>
                        </a>
                        <a href="/query5">
                            <button className="btn">Query 5</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
