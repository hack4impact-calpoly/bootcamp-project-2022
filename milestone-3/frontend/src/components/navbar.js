"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const chef_icon_png_1 = __importDefault(require("../imgs/chef_icon.png"));
const react_router_dom_1 = require("react-router-dom");
function Navbar() {
    const face = (0, react_1.useRef)(null);
    const [button_count, setButtonCount] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        if (face.current) {
            face.current.addEventListener('click', () => {
                if (face.current != null) {
                    if (button_count < 3) {
                        face.current.width = face.current.width * 1.1;
                        face.current.height = face.current.height * 1.1;
                        setButtonCount(button_count + 1);
                    }
                    else {
                        face.current.width = face.current.width * 2;
                        face.current.height = face.current.height * 2;
                    }
                }
            });
        }
    });
    return (<>
    <header>
        <img ref={face} className='logo' src={chef_icon_png_1.default} alt="logo" width="200px" height="200px"/>
        <nav>
            <ul className="navbar-links">
                <li><react_router_dom_1.Link to="/">Home</react_router_dom_1.Link></li>
                <li><react_router_dom_1.Link to="/about">About</react_router_dom_1.Link></li>
            </ul>
        </nav>
        
    </header>

    
    </>);
}
exports.default = Navbar;
