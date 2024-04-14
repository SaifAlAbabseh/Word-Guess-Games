import '../common_css/common.css';

function MainPanel({ children }) {
    return (
        <div className="mainPanel">
            { children }
        </div>
    );
}

export default MainPanel;