
class student{

    private _first_name: string = "";
    private _last_name: string = "";
    private _location:object  ={
        lat:0,
        lan:0,
    };

    showFullName(_first_name:string,_last_name:string){
        return `${_first_name} ${_last_name}`;
    }
    
};