const jogadorx ="X";
const jogadory ="O";
var vez = jogadorx;
var fim = false;

turnUpload();
spaceStart();

function turnUpload()
{
    if(fim) { return;}

    if(vez == jogadorx)
    {
        var jogador = document.getElementById("vezdele");
        jogador.innerHTML = "Vez do jogador: X"
    }
    else
    {
        var jogador = document.getElementById("vezdele");
        jogador.innerHTML = "Vez do jogador: O"
    }
}



function spaceStart()
{
    var space = document.getElementsByClassName("space");

    for(var i = 0; i < space.length; i++)
    {
        space[i].addEventListener("click", function()
        {
        
            if(fim) {return;}

            if(this.getElementsByTagName("M").length == 0)
            {

                if(vez == jogadorx)
                {
                    this.innerHTML = "X";
                    this.setAttribute("jogada", jogadorx);
                    vez = jogadory;
                }
                else
                {
                    this.innerHTML = "O";
                    this.setAttribute("jogada",jogadory);
                    vez = jogadorx;

                }

            turnUpload();
            whoWins();
            }    
        }
        );   
    }
    function whoWins()
    {   
        var j1 = document.getElementById("j1.1").getAttribute("jogada");
        var j2 = document.getElementById("j1.2").getAttribute("jogada");
        var j3 = document.getElementById("j1.3").getAttribute("jogada");
        var j4 = document.getElementById("j2.1").getAttribute("jogada");
        var j5 = document.getElementById("j2.2").getAttribute("jogada");
        var j6 = document.getElementById("j2.3").getAttribute("jogada");
        var j7 = document.getElementById("j3.1").getAttribute("jogada");
        var j8 = document.getElementById("j3.2").getAttribute("jogada");
        var j9 = document.getElementById("j3.3").getAttribute("jogada");

        var winner = "";

        if((j1 == j4 && j1 == j7 && j1 != "") || (j1 == j2 && j1 == j3 && j1 != "") || (j1 == j5 && j1 == j9 && j1 != ""))
        {
            winner = j1;
        }

        else if((j5 == j4 && j5 == j6 && j5 == "")|| (j5 == j2 && j5 == j8 && j5 != "") || (j5 == j3 && j5 == j7 && j5 != ""))
        {
            winner = j5;
        }

        else if((j9 == j8 && j9 == j7 && j9 =="") || (j9 == j3 && j9 == j6 && j9 ==""))
        {
            winner = j9;

        }

        if(winner != "")
        {
            fim = true;
            alert("O Vencedor foi o Jogador: "+ winner + "");
        }

    }
}