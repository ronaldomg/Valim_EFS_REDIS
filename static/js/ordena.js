function Ordena(ordem,ordem2) 
{
    if (document.getElementById("vORDEREDBY").value == ordem2) 
	{
		document.getElementById("vORDEREDBY").value=ordem;
    } 
	else 
	{
		document.getElementById("vORDEREDBY").value=ordem2;
    }
	
    document.getElementById("vPAGINA").value=1;
    gx.O.executeServerEvent("'ATUALIZAPAGINA'",false);
	
    //document.getElementsByName("_EventName").value="'SEARCH'";
    //document.getElementById("MAINFORM").submit();
    
}    