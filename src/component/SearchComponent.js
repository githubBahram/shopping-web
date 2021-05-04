import React, {useState, Fragment} from 'react'
import styled from 'styled-components'
import instance from "../config/axiosConfig";
import AsyncTypeahead from "react-bootstrap-typeahead/lib/components/AsyncTypeahead";


const SearchComponent = (props) => {
    const {urlPath, params, placeholder} = props
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const url = urlPath

    const getList = async (url) => {
        const {data} = await instance.get(url);
        return data;
    };

    const handleSearch = (query) => {
        setIsLoading(true);
        const data = getList(url)
        const options = data.map((item) => ({
            id: item.id,
            name: item.name,
        }))

        setOptions(options);
        setIsLoading(false);

    };
    const filterBy = () => true;
    return (
        <AsyncTypeahead
            filterBy={filterBy}
            id="async-example"
            isLoading={isLoading}
            placeholder={placeholder}
            labelKey="name"
            minLength={3}
            onSearch={handleSearch}
            options={options}
            style={{fontFamily: "IRANSansWeb", width: "100%"}}
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
