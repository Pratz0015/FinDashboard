"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled>
                Previous
            </button>
            <button
                className={styles.button}>
                Next
            </button>
        </div>
    );
};

export default Pagination;