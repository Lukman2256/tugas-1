// Cafe Component
class Cafe extends React.Component {
    render() {
        return (
        <div>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </div>
        );
    }
};

const myElement = <Cafe />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);