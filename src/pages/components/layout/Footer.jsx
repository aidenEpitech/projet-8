import logo from '../../../assets/logo-white.svg'

const Header = () => {

    return (
        <footer className={"bg-black text-white py-8"}>
            <div className={"container mx-auto text-center"}>
                <img src={logo} alt={"Kasa Logo"} className={"mx-auto h-8 mb-4"}/>
                <p className={"text-sm"}>&copy; 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Header;
