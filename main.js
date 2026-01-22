var squ_inp = document.getElementById("squ_inp");
var squ_res = document.getElementById("squ_res");
var squ_res_2 = document.getElementById("squ_res_2");
var squ_res_3 = document.getElementById("squ_res_3");
var squ_res_4 = document.getElementById("squ_res_4");
var squ_error = document.getElementById("squ_error");

function submitOutSqu(){
    if(squ_inp.value === ""){
        squ_error.innerHTML = "Error: Enter any value!";
        squ_error.style.color = "red";
        squ_error.style.fontFamily = "Courier";
    }

    else{
        squ_error.innerHTML = "";
        squ_error.style.color = "";
        squ_error.style.fontFamily = "";
        squ_res.innerHTML = "Length of the square = " + squ_inp.value + " m ";
        squ_res_2.innerHTML = "∴ Area = (1 side x 1 side) unit<sup>2</sup> ";
        squ_res_3.innerHTML = " = " + "(" + squ_inp.value + " x " + squ_inp.value + ")" + " m<sup>2</sup> ";
        squ_res_4.innerHTML = " = " + (squ_inp.value * squ_inp.value) + " m<sup>2</sup> ";
    }
}



var rec_inp = document.getElementById("rec_inp");
var rec_inp_2 = document.getElementById("rec_inp_2");
var rec_res = document.getElementById("rec_res");
var rec_res_2 = document.getElementById("rec_res_2");
var rec_res_3 = document.getElementById("rec_res_3");
var rec_res_4 = document.getElementById("rec_res_4");
var rec_error = document.getElementById("rec_error");

function submitOutRec(){
    if(rec_inp.value === "" && rec_inp_2.value === ""){
        rec_error.innerHTML = "Error: Enter the required values!";
        rec_error.style.color = "red";
        rec_error.style.fontFamily = "Courier";
    }

    else if(rec_inp.value != "" && rec_inp_2.value === ""){
        rec_error.innerHTML = "Error: Enter the required values!";
        rec_error.style.color = "red";
        rec_error.style.fontFamily = "Courier";
    }

    else if(rec_inp.value === "" && rec_inp_2.value != ""){
        rec_error.innerHTML = "Error: Enter the required values!";
        rec_error.style.color = "red";
        rec_error.style.fontFamily = "Courier";
    }

    else{
        rec_error.innerHTML = "";
        rec_error.style.color = "";
        rec_error.style.fontFamily = "";
        rec_res.innerHTML = "Length of the rectangle = " + rec_inp.value + " m <br><br>" + "Breadth of the rectangle = " + rec_inp_2.value + " m ";
        rec_res_2.innerHTML = "∴ Area = (length x breadth) unit<sup>2</sup> ";
        rec_res_3.innerHTML = " = " + "(" + rec_inp.value + " x " + rec_inp_2.value + ")" + " m<sup>2</sup> ";
        rec_res_4.innerHTML = " = " + (rec_inp.value * rec_inp_2.value) + " m<sup>2</sup> ";
    }
}



var par_inp = document.getElementById("par_inp");
var par_inp_2 = document.getElementById("par_inp_2");
var par_res = document.getElementById("par_res");
var par_res_2 = document.getElementById("par_res_2");
var par_res_3 = document.getElementById("par_res_3");
var par_res_4 = document.getElementById("par_res_4");
var par_error = document.getElementById("par_error");

function submitOutPar(){
    if(par_inp.value === "" && par_inp_2.value === ""){
        par_error.innerHTML = "Error: Enter the required values!";
        par_error.style.color = "red";
        par_error.style.fontFamily = "Courier";
    }

    else if(par_inp.value != "" && par_inp_2.value === ""){
        par_error.innerHTML = "Error: Enter the required values!";
        par_error.style.color = "red";
        par_error.style.fontFamily = "Courier";
    }

    else if(par_inp.value === "" && par_inp_2.value != ""){
        par_error.innerHTML = "Error: Enter the required values!";
        par_error.style.color = "red";
        par_error.style.fontFamily = "Courier";
    }

    else{
        par_error.innerHTML = "";
        par_error.style.color = "";
        par_error.style.fontFamily = "";
        par_res.innerHTML = "Base of the parallelogram = " + par_inp.value + " m <br><br>" + "Height of the parllelogram = " + par_inp_2.value + " m ";
        par_res_2.innerHTML = "∴ Area = (base x height) unit<sup>2</sup>";
        par_res_3.innerHTML = " = " + "(" + par_inp.value + " x " + par_inp_2.value + ")" + " m<sup>2</sup> ";
        par_res_4.innerHTML = " = " + (par_inp.value * par_inp_2.value) + " m<sup>2</sup> ";
    }
}



var tri_inp = document.getElementById("tri_inp");
var tri_inp_2 = document.getElementById("tri_inp_2");
var tri_res = document.getElementById("tri_res");
var tri_res_2 = document.getElementById("tri_res_2");
var tri_res_3 = document.getElementById("tri_res_3");
var tri_res_4 = document.getElementById("tri_res_4");
var tri_res_5 = document.getElementById("tri_res_5");
var tri_error = document.getElementById("tri_error");

function submitOutTri(){
    if(tri_inp.value === "" && tri_inp_2.value === ""){
        tri_error.innerHTML = "Error: Enter the required values!";
        tri_error.style.color = "red";
        tri_error.style.fontFamily = "Courier";
    }

    else if(tri_inp.value != "" && tri_inp_2.value === ""){
        tri_error.innerHTML = "Error: Enter the required values!";
        tri_error.style.color = "red";
        tri_error.style.fontFamily = "Courier";
    }

    else if(tri_inp.value === "" && tri_inp_2.value != ""){
        tri_error.innerHTML = "Error: Enter the required values!";
        tri_error.style.color = "red";
        tri_error.style.fontFamily = "Courier";
    }

    else{
        tri_error.innerHTML = "";
        tri_error.style.color = "";
        tri_error.style.fontFamily = "";
        tri_res.innerHTML = "Base of the triangle = " + tri_inp.value + " m <br><br>" + "Height of the triangle = " + tri_inp_2.value + " m ";
        tri_res_2.innerHTML = "∴ Area = (base x height) ÷ 2 unit<sup>2</sup>";
        tri_res_3.innerHTML = " = " + "(" + tri_inp.value + " x " + tri_inp_2.value + ")" + " ÷ 2" + 
        " m<sup>2</sup> ";
        tri_res_4.innerHTML = " = " + (tri_inp.value * tri_inp_2.value) + " ÷ 2" + " m<sup>2</sup> ";
        tri_res_5.innerHTML = " = " + (tri_inp.value * tri_inp_2.value / 2) + " m<sup>2</sup> ";
    }
}


var search_box = document.getElementById("search_box");

function search(){
    if(search_box.value === "" || search_box.value != ""){
        alert("Error 404: Not Found!");
        search_box.value = "";
    }
}