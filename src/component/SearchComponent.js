import React, {useState, Fragment} from 'react'
import styled from 'styled-components'
import AsyncTypeahead from "react-bootstrap-typeahead/lib/components/AsyncTypeahead";

const SEARCH_URI = 'http://127.0.0.1:8080/category-management/categories';

const SearchComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const handleSearch = (query) => {
        setIsLoading(true);

        fetch(`${SEARCH_URI}`)
            .then((resp) => resp.json())
            .then((items) => {
                const options = items.map((i) => ({
                    id: i.id,
                    name: i.name,
                }));
                setOptions(options);
                setIsLoading(false);
            })

    };
    const filterBy = () => true;
    return (
        <AsyncTypeahead
            filterBy={filterBy}
            id="async-example"
            isLoading={isLoading}
            placeholder="جستجو محصول یا برند ..."
            labelKey="name"
            minLength={3}
            onSearch={handleSearch}
            options={options}
            style={{fontFamily:"IRANSansWeb",width:"70%"}}
            renderMenuItemChildren={(option, props) => (
                <Fragment>
                    <div style={{display: "flex", flex: 1, justifyContent: "space-between"}}>
                        <span>{option.name}</span>
                        <img
                            alt='alt'
                            src='https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/hph-209354.jpg'
                            style={{
                                height: '24px',
                                marginRight: '10px',
                                width: '24px',
                            }}
                        />
                    </div>

                </Fragment>
            )}
        />
    );

}
export default SearchComponent
