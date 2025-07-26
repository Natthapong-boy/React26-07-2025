import './Hello.css';
export default function Hello({name="KU",age=55}){
    return (
        <>
            <h1>Hello {name} <br></br>age is :  {age}</h1>
            <div id="email"> email:Natthapong.cha@ku.th </div>
            <div class="box yellow-bg">Tel: 019875364</div>
        </>
        );


}