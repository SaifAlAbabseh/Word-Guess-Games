import '../common_css/common.css';

function MainContainer({ children }) {
    return (
        <main className="mainContainer">
            { children }
        </main>
    );
}

export default MainContainer;