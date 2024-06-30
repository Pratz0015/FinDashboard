

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";


const Search = ({ placeholder,value,onchange }) => {
    const handlesearch = ()=>{
        onchange();
    }
    return (
        <div className={styles.container}>
            <MdSearch />
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
                value={value}
                onchange={handlesearch}
            />
        </div>
    );
};

export default Search;