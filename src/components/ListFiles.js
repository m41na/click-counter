import React from 'react';
import './ListFiles.css';
import json from '../../pages/data.json';

class ListFiles extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            files: undefined
        };
    }    

    componentDidMount(){        
        const context = require.context('raw-loader!../../pages/', true, /\.xml/);
        //const context = require.context('raw-loader!../../pages/', true, /\.json/);
        this.setState({files: context, text: 'nothing selected'});   
    }

    display(item) {
        const type = item.substr(item.lastIndexOf("\.") + 1);
        switch(type){
            case "js":
            case "xml": {
                //const module = this.state.files.resolve(item);
                const text = this.state.files(item);
                this.setState({text: text});
                break;
            }
            case "json": {
                // const file = this.state.files.resolve(item);
                // import(file).then(text => {
                //     console.log(text);
                //     this.setState({text: prettyjson.render(text, options)});
                // });   
                const text = this.state.files(item);     
                this.setState({text: prettyjson.render(text, options)});        
                break;
            }
            default: {
                this.setState({text: 'not js'});
                break;
            }
        }
    }

    render(){
        const files = this.state.files? this.state.files.keys() : [];
        const textedJson = JSON.stringify(json, undefined, 4);
        return (
            <section className="list-file">
                <ul>
                    {files.map(item=> <li key={item}><a href="#" onClick={()=>this.display(item)}>{item}</a></li>)}
                </ul>
                <div>{this.state.text}</div>
                <div className="pretty-json">
                <textarea style={{width: '100w',height: '100v'}} defaultValue={textedJson}></textarea>
                </div>                
            </section>
        );
    }
}

export default ListFiles;