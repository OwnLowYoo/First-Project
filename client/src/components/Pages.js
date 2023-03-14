import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {tour} = useContext(Context)
    const pageCount = Math.ceil (tour.totalCount / tour.limit)
    const pages = []

    for (let i = 0; i< pageCount; i++) {
        pages.push(i+1)
    }
    return (
        <Pagination className="mt-5">
            {pages.map (page=>
            <Pagination.Item
            active = {tour.page === page}
            onClick = {() => tour.setPage(page)}
            >
                {page}
            </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;