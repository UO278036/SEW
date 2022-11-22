"use strict";
class Calculadora {
    state;

    op1; op1Num;
    op2; op2Num;
    operator;
    res; resNum;

    MEMORIA;

    constructor (){
        this.state = "FINISHED_OPERATION";
        this.op1 = "0";
        this.op1Num = new Number("0");
        this.op2 = "0";
        this.op2Num = new Number("0");
        this.operator = null;
        this.res = "0";
        this.resNum = new Number("0");
        this.MEMORIA = new Number("0");
    }

    digitos(n){
        if(this.state == "FINISHED_OPERATION") {
            if(this.op1 == "0") {
                this.op1 = n;
                document.getElementsByTagName("input")[0].value = this.op1;
                this.state = "OP1_INT_CONSTR";
            }
        } 
        
        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            if(this.op1 == "0") {
                this.op1 = n;
                document.getElementsByTagName("input")[0].value = this.op1;
            } else {
                this.op1 = document.getElementsByTagName("input")[0].value + n;
                document.getElementsByTagName("input")[0].value = this.op1;
            }
        }

        else if(this.state == "OPERATOR_CHANGE") {
            this.op2 = n;
            document.getElementsByTagName("input")[0].value = this.op2;
            this.state = "OP2_INT_CONSTR";
        } 

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            if(this.op2 == "0") {
                this.op2 = n;
                document.getElementsByTagName("input")[0].value = this.op2;
            } else {
                this.op2 = document.getElementsByTagName("input")[0].value + n;
                document.getElementsByTagName("input")[0].value = this.op2;
            } 
        }

        else if(this.state = "CALCULATED") {
            var ope = this.operator;
            var o2 = this.op2;
            this.borrar();
            this.operator = ope;
            this.op2 = o2;
            this.digitos(n);
        }

    }

    punto(){
        if(this.state == "OP1_INT_CONSTR") {
            this.op1 += ".";
            this.state = "OP1_DOU_CONSTR";
            document.getElementsByTagName("input")[0].value = this.op1;
        }

        else if(this.state == "OP2_INT_CONSTR") {
            this.op2 += ".";
            this.state = "OP2_DOU_CONSTR";
            document.getElementsByTagName("input")[0].value = this.op2;
        }

        else if(this.state == "OPERATOR_CHANGE") {
            this.op2 = "0.";
            this.state = "OP2_DOU_CONSTR";
            document.getElementsByTagName("input")[0].value = this.op2;
        }

        else if(this.state == "CALCULATED" || this.state == "FINISHED_OPERATION") {
            this.op1 = "0.";
            this.state = "OP1_DOU_CONSTR";
            document.getElementsByTagName("input")[0].value = this.op1;
        }

    }

    suma() {

        if(this.state == "OPERATOR_CHANGE") {
            this.operator = "+";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            this.operator = "+";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            this.igual();
            this.operator = "+";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "CALCULATED") {
            this.operator = "+";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

    }

    resta() {
        if(this.state == "OPERATOR_CHANGE") {
            this.operator = "-";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            this.operator = "-";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            this.igual();
            this.operator = "-";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "CALCULATED") {
            this.operator = "-";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

    }

    multiplicacion() {
        if(this.state == "OPERATOR_CHANGE") {
            this.operator = "x";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            this.operator = "x";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            this.igual();
            this.operator = "x";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "CALCULATED") {
            this.operator = "x";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

    }

    division() {
        if(this.state == "OPERATOR_CHANGE") {
            this.operator = "÷";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            this.operator = "÷";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            this.igual();
            this.operator = "÷";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }

        else if(this.state == "CALCULATED") {
            this.operator = "÷";
            this.op1 = this.res;
            this.op2 = "0";
            this.state = "OPERATOR_CHANGE";
        }
    }

    igual() {
        if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {

            this.op1Num = new Number(this.op1);
            this.op2Num = new Number(this.op2);
            
            try {
                if(this.operator == "+")
                    this.resNum = eval(this.op1Num + this.op2Num);
                else if(this.operator == "-")
                    this.resNum = eval(this.op1Num - this.op2Num);
                else if(this.operator == "x")
                    this.resNum = eval(this.op1Num * this.op2Num);
                else if(this.operator == "÷")
                    this.resNum = eval(this.op1Num / this.op2Num);
            } catch(err) {
                alert("Error: " + err);
            }

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
            this.state = "CALCULATED";
        }

        else if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            if(this.operator != null) {
                this.op1Num = new Number(this.op1);
                this.op2Num = new Number(this.op2);

                try {
                    if(this.operator == "+")
                        this.resNum = eval(this.op1Num + this.op2Num);
                    else if(this.operator == "-")
                        this.resNum = eval(this.op1Num - this.op2Num);
                    else if(this.operator == "x")
                        this.resNum = eval(this.op1Num * this.op2Num);
                    else if(this.operator == "÷")
                        this.resNum = eval(this.op1Num / this.op2Num);
                } catch(err) {
                    alert("Error: " + err);
                }

                this.res = this.resNum;
                document.getElementsByTagName("input")[0].value = this.res;
                this.state = "CALCULATED";
            }
        }

        else if(this.state == "CALCULATED") {
            this.op1Num = new Number(this.res);
            this.op2Num = new Number(this.op2);

            try {
                if(this.operator == "+")
                    this.resNum = eval(this.op1Num + this.op2Num);
                else if(this.operator == "-")
                    this.resNum = eval(this.op1Num - this.op2Num);
                else if(this.operator == "x")
                    this.resNum = eval(this.op1Num * this.op2Num);
                else if(this.operator == "÷")
                    this.resNum = eval(this.op1Num / this.op2Num);
            } catch(err) {
                alert("Error: " + err);
            }

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
            this.state = "CALCULATED";
        }

        else if(this.state == "OPERATOR_CHANGE") {
            this.op2 = this.op1;

            this.op1Num = new Number(this.op1);
            this.op2Num = new Number(this.op2);

            try {
                if(this.operator == "+")
                    this.resNum = eval(this.op1Num + this.op2Num);
                else if(this.operator == "-")
                    this.resNum = eval(this.op1Num - this.op2Num);
                else if(this.operator == "x")
                    this.resNum = eval(this.op1Num * this.op2Num);
                else if(this.operator == "÷")
                    this.resNum = eval(this.op1Num / this.op2Num);
            } catch(err) {
                alert("Error: " + err);
            }

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
            this.state = "CALCULATED";
        }

        else if(this.state == "FINISHED_OPERATION") {
            this.state = "CALCULATED";
        }

    }

    borrar() {
        this.state = "FINISHED_OPERATION";
        this.op1 = "0";
        this.op1Num = new Number("0");
        this.op2 = "0";
        this.op2Num = new Number("0");
        this.operator = null;
        this.res = "0";
        this.resNum = new Number("0");
        document.getElementsByTagName("input")[0].value = "0";
    }

    borrarPantalla() {
        if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR" || this.state == "FINISHED_OPERATION") {
            if(this.state == "FINISHED_OPERATION")
                this.digitos(0);
            else {
                this.op1 = "0";
                document.getElementsByTagName("input")[0].value = this.op1;
                this.state = "OP1_INT_CONSTR";
            }
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR" || this.state == "OPERATOR_CHANGE") {
            if(this.state == "OPERATOR_CHANGE")
                this.digitos(0);
            else {
                this.op2 = "0";
                document.getElementsByTagName("input")[0].value = this.op2;
                this.state = "OP2_INT_CONSTR";
            }
        }

        else if(this.state == "CALCULATED") {
            this.resNum = new Number('0');

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
        }

    }

    porcentaje() {
        if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR" || this.state == "OPERATOR_CHANGE") {
            if(this.state == "OPERATOR_CHANGE") {
                this.state = "OP2_INT_CONSTR";
                this.op2 = "0";
            }
           
            try {
                if(this.operator == "+" || this.operator == "-") {
                    this.op2 = eval(this.op1 * this.op2 / 100);
                    this.igual();
                } else if(this.operator == "x" || this.operator == "÷") {
                    this.op2 = eval(this.op2 / 100);
                    this.igual();
                }
            } catch(err) {
                alert("Error: " + err);
            }
        }
    }

    raiz() {
        if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR" || this.state == "FINISHED_OPERATION") {
            var raiz = Math.sqrt(new Number(this.op1));

            if(raiz % 1 == 0)
                this.state = "OP1_INT_CONSTR";
            else
                this.state = "OP1_DOU_CONSTR"; 

            this.op1 = raiz;
            document.getElementsByTagName("input")[0].value = this.op1;
        } else if (this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR" || this.state == "OPERATOR_CHANGE") {
            var raiz = Math.sqrt(new Number(this.op2));

            if(raiz % 1 == 0)
                this.state = "OP2_INT_CONSTR";
            else
                this.state = "OP2_DOU_CONSTR"; 

            this.op2 = raiz;
            document.getElementsByTagName("input")[0].value = this.op2;
        } else if(this.state == "CALCULATED") {
            this.resNum = Math.sqrt(new Number(this.resNum));

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
        }
    }

    masMenos() {
        if(this.state == "OP1_INT_CONSTR" || this.state == "OP1_DOU_CONSTR") {
            if(this.op1 != "0") {
                this.op1 *= -1;
                document.getElementsByTagName("input")[0].value = this.op1;
            }
        }

        else if(this.state == "OP2_INT_CONSTR" || this.state == "OP2_DOU_CONSTR") {
            if(this.op2 != "0") {
                this.op2 *= -1;
                document.getElementsByTagName("input")[0].value = this.op2;
            }
        }

        else if(this.state == "OPERATOR_CHANGE") {
            this.digitos(this.op1 * -1);
        }

        else if(this.state == "CALCULATED") {
            this.resNum *= -1;

            this.res = this.resNum;
            document.getElementsByTagName("input")[0].value = this.res;
        }
    }

    Mrc() {
        if(this.state == "CALCULATED" || this.state == "FINISHED_OPERATION") {
            document.getElementsByTagName("input")[0].value = "M " + this.MEMORIA;
        }

        else if((this.state == "OP1_INT_CONSTR" && this.op1 == "0") || (this.state == "OP1_DOU_CONSTR" && this.op1 == "0.")) {
            this.op1 = this.MEMORIA;
            document.getElementsByTagName("input")[0].value = this.op1;
            if(this.op1 % 1 != 0)
                this.state = "OP1_DOU_CONSTR";
        }

        else if((this.state == "OP2_INT_CONSTR" && this.op2 == "0") || (this.state == "OP2_DOU_CONSTR" && this.op2 == "0.") || this.state == "OPERATOR_CHANGE") {
            this.op2 = this.MEMORIA;
            document.getElementsByTagName("input")[0].value = this.op2;
            if(this.op2 % 1 == "0")
                this.state = "OP2_INT_CONSTR";    
            else
                this.state = "OP2_DOU_CONSTR";
        }
    }

    mMenos() {
        this.igual();
        this.MEMORIA -= this.resNum;
        document.getElementsByTagName("input")[0].value = "M " + this.res;
    }

    mMas() {
        this.igual();
        this.MEMORIA += this.resNum;
        document.getElementsByTagName("input")[0].value = "M " + this.res;
    }

    receiveKeyPressed(e) {
        if (e == "Escape")
            this.borrar();
        else if(e == "1")
            this.digitos(1);
        else if(e == "2")
            this.digitos(2);
        else if(e == "3")
            this.digitos(3);
        else if(e == "4")
            this.digitos(4);
        else if(e == "5")
            this.digitos(5);
        else if(e == "6")
            this.digitos(6);
        else if(e == "7")
            this.digitos(7);
        else if(e == "8")
            this.digitos(8);
        else if(e == "9")
            this.digitos(9);
        else if(e == "0")
            this.digitos(0);
        else if(e == ".")
            this.punto();
        else if(e == "+")
            this.suma();
        else if(e == "-")
            this.resta();
        else if(e == "*")
            this.multiplicacion();
        else if(e == "/")
            this.division();
        else if(e == "=")
            this.igual();
        else if(e == "%")
            this.porcentaje();
        else if(e == "r" || e == "R")
            this.raiz();
        else if(e == "s" || e == "S")
            this.masMenos();
        else if(e == "e" || e == "E")
            this.borrarPantalla();
        else if(e == "m" || e == "M")
            this.Mrc();
        else if(e == ">")
            this.mMas();
        else if(e == "<")
            this.mMenos();
    }

}

var CALC = new Calculadora();

document.addEventListener('keydown', (e) => CALC.receiveKeyPressed(e.key));
