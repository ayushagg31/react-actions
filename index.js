const input = document.querySelector("#input");
const constantEl = document.querySelector('#constants')
const epicEl = document.querySelector('#epic')
const actionEl = document.querySelector('#action')
const dispatchEl = document.querySelector('#dispatch')
const reducerEl = document.querySelector('#reducer')
const div = document.querySelector('#content')
div.style.display = 'none'

const lazyInput = document.querySelector("#lazy");
const lazyOutput = document.querySelected('#load');
function lazy() {
  const str = lazyInput.value
  const ele = str.split(" ");
  
  const resp = `const ${ele[1]} = lazy(() => import(${ele[3]}))`;
  lazyOutput.innerHTML = resp;

}



function amaze() {

    const str = input.value // getServiceTemplates
    div.style.display = 'block'
    const baseString = str.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" "); // get Service Templates

    const tailConstants = ["_INITIAL", "_SUCCESS", "_CANCEL", "_FAILURE"];

    const baseConstantString = str
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .toUpperCase()
    .split(" ")
    .join("_"); // GET_SERVICE_TEMPLATES

    const constants = tailConstants.map((c) => baseConstantString + c); 

    constantEl.innerHTML = constants.map(c=> 
        `export const ${c} = '${c}';`
    ).join('<br /> ')

    const actionType = "actionType.";
    const actionTypes = constants.map((c) => `actionType.${c}`);

    epicEl.innerHTML = `const ${str}Epic = putterFunction(${str}, ${actionTypes.join(", ")});<br/>`

    const dispatch = `dispatch${str[0].toUpperCase()}${str.substr(1)}`;

    actionEl.innerHTML = `export const ${str} = (payload) => ({ type: actionType.${constants[0]}, payload });`

    dispatchEl.innerHTML = `${dispatch}: ${str},
                            <br/><br/>
                            ${dispatch}: PropTypes.func.isRequired,`

    reducer.innerHTML =  actionTypes.map(a=> 
                           `case ${a}: <br/>
                           &nbsp;&nbsp;return {<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;...state<br/>
                            &nbsp;&nbsp;};`
                                ).join('<br/>')

}

