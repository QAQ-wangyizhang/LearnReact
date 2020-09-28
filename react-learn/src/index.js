import React from 'react';
import ReactDOM from 'react-dom';
import Pager from "./components/Pager"
ReactDOM.render(<Pager current={1}
                        total= {20}
                        limit = {5}
                        panelNumber = {10}
></Pager>, document.getElementById("root"))