import HostHeaderHome from "../../organisms/host-header/host-header-home";
import CreateFoodMenuTemplate from "../../templates/create-food-menu-template/create-food-menu-template";
import HostFooterHome from "../../organisms/host-footer/host-footer-home";

function CreateFoodMenuPage() {
    return (
        <>
            <header>
                <HostHeaderHome />
            </header>
            <div className="body">
                <CreateFoodMenuTemplate />
            </div>
            <footer>
                <HostFooterHome />
            </footer>
        </>
    );
}

export default CreateFoodMenuPage;
