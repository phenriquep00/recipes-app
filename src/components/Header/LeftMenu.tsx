import { Gear, UserCircle } from "phosphor-react";

export function LeftMenu() {
    return (
        <section  className="flex gap-5">
            <button>
                <Gear size={48} weight="thin" color="#4B5563"/>
            </button>
            
            <button>
                <UserCircle size={48} weight="thin" color="#4B5563"/>
            </button>
            
        </section>
    )
}