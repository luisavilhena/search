import React, {useState} from 'react';
import Form from "../Form/Form";
import ContentResult from '../ContentResult/ContentResult';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import "./Page.css";

function Page() {
    const [loadResult, setLoadResult] = useState()
    const [newData, setNewData] = useState([])
    const [disableDestak, setDisableDestak] = useState()
    const [addLoading, setAddLoading] = useState(true)

    const ANIMALS =["bear", "bird", "cat", "cetacean", "cow", "crocodilia", "dog",
    "fish", "horse", "insect", "lion", "rabbit", "rodent", "snake"]
    const getImage = () => faker.image.urlLoremFlickr({ category: "animal"});
    const getUrl = () => faker.internet.url();
    const getText = () => faker.lorem.lines({min: 2, max: 4});
    const getType = () => faker.animal.type();
    const getTitle = type => faker.animal[type]();

    var type = getType()
    const DATA = (e)=>{
        if(e){
            type = e;
        }
        return ([
            {
                id: faker.number.bigInt(1000n),
                title: getTitle(type),
                text: getText(),
                url: getUrl(),
                img: getImage(),
            },
            {
                id: faker.number.bigInt(1000n),
                title: getTitle(type),
                text: getText(),
                url: getUrl(),
                img: getImage(),
            },
            {
                id: faker.number.bigInt(1000n),
                title: getTitle(type),
                text: getText(),
                url: getUrl(),
                img: getImage(),
            },
            {
                id: faker.number.bigInt(1000n),
                title: getTitle(type),
                text: getText(),
                url: getUrl(),
                img: getImage(),
            },
            {
                id: faker.number.bigInt(1000n),
                title: getTitle(type),
                text: getText(),
                url: getUrl(),
                img: getImage(),
            },
            {
                id: faker.number.bigInt(1000n),
                title: getTitle(type),
                text: getText(),
                url: getUrl(),
                img: getImage(),
            },
            {
                id: faker.number.bigInt(1000n),
                title: getTitle(type),
                text: getText(),
                url: getUrl(),
                img: getImage(),
            },
            {
                id: faker.number.bigInt(1000n),
                title: getTitle(type),
                text: getText(),
                url: getUrl(),
                img: getImage(),
            }
        ])     
    }
   

    const inputForm = (enteredAnimal) => {

        setNewData(DATA())
        const valueTypeNew = enteredAnimal
        //RESULTADOS:
        if(ANIMALS.includes(valueTypeNew)){
            //resultado positivo
            setLoadResult(<ContentResult DATA= {DATA(valueTypeNew)} onDisableDestakStep={searchWithDestak} onDisableDestakMobileStep={searchWithDestak}/>)
        }else if(!ANIMALS.includes(valueTypeNew) &&  valueTypeNew.length > 0){
            //resultado com caracteres errados
            setLoadResult(<div className="page-structure"><p>No results for <span> "{`${valueTypeNew}`}"</span></p> <p>Try looking for: <span>insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird</span></p></div>)
        }else {
            //resultado vazio
            setLoadResult(<p className="page-structure">Try looking for: <span>insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird</span></p>)
        }
        //adiciona background cinza no resultado de busca
        const timer = setTimeout(() => setAddLoading(false), 800);
        setAddLoading(true)
    }
    //Retira o destaque ao fazer a busca e habilita o destaque ao clicar nos itens da busca
    const searchWithDestak= (e) => {
        setDisableDestak(e)
    }


    return (
        <div className="page">
            <Form onSearchWithoutClick={searchWithDestak} onInputForm = {inputForm}/>
            <div className={`page-structure ${disableDestak ? "" : "disable-destak"} ${addLoading ? "page-add-loading" : ""} `}>
            {loadResult}
            </div>
        </div>
    )
}
export default Page;