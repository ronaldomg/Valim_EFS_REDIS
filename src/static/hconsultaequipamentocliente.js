/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:18:10.78
*/
gx.evt.autoSkip = false;
gx.define('hconsultaequipamentocliente', false, function () {
   this.ServerClass =  "hconsultaequipamentocliente" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV223Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A8824AparelhoEmpresaId=gx.fn.getControlValue("APARELHOEMPRESAID") ;
      this.A8825AparelhoId=gx.fn.getIntegerValue("APARELHOID",'.') ;
      this.A8821AparelhoDescricao=gx.fn.getControlValue("APARELHODESCRICAO") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.A8832AparelhoCaracId=gx.fn.getIntegerValue("APARELHOCARACID",'.') ;
      this.A8833AparelhoCaracEmpresaId=gx.fn.getControlValue("APARELHOCARACEMPRESAID") ;
      this.AV74AparelhoCaracEmpresaId=gx.fn.getControlValue("vAPARELHOCARACEMPRESAID") ;
      this.A8834AparelhoCaracValorConteudo=gx.fn.getControlValue("APARELHOCARACVALORCONTEUDO") ;
      this.A8837AparelhoCaracValorId=gx.fn.getIntegerValue("APARELHOCARACVALORID",'.') ;
      this.AV183ListaValorCarac=gx.fn.getControlValue("vLISTAVALORCARAC") ;
      this.A8865AparelhoClienteSeqId=gx.fn.getIntegerValue("APARELHOCLIENTESEQID",'.') ;
      this.A9692AparelhoClientePessoaEmpId=gx.fn.getControlValue("APARELHOCLIENTEPESSOAEMPID") ;
      this.A9691AparelhoClientePessoaId=gx.fn.getIntegerValue("APARELHOCLIENTEPESSOAID",'.') ;
      this.A9693AparelhoClienteAparelhoEmpId=gx.fn.getControlValue("APARELHOCLIENTEAPARELHOEMPID") ;
      this.A9694AparelhoClienteAparelhoId=gx.fn.getIntegerValue("APARELHOCLIENTEAPARELHOID",'.') ;
      this.A8856AparelhoCaracteristicaVlr1=gx.fn.getControlValue("APARELHOCARACTERISTICAVLR1") ;
      this.A8857AparelhoCaracteristicaVlr2=gx.fn.getControlValue("APARELHOCARACTERISTICAVLR2") ;
      this.A8858AparelhoCaracteristicaVlr3=gx.fn.getControlValue("APARELHOCARACTERISTICAVLR3") ;
      this.A8859AparelhoCaracteristicaVlr4=gx.fn.getControlValue("APARELHOCARACTERISTICAVLR4") ;
      this.A8860AparelhoCaracteristicaVlr5=gx.fn.getControlValue("APARELHOCARACTERISTICAVLR5") ;
      this.A8861AparelhoCaracteristicaVlr6=gx.fn.getControlValue("APARELHOCARACTERISTICAVLR6") ;
      this.A8862AparelhoCaracteristicaVlr7=gx.fn.getControlValue("APARELHOCARACTERISTICAVLR7") ;
      this.A8863AparelhoCaracteristicaVlr8=gx.fn.getControlValue("APARELHOCARACTERISTICAVLR8") ;
      this.A8864AparelhoCaracteristicaVlr9=gx.fn.getControlValue("APARELHOCARACTERISTICAVLR9") ;
      this.A9695AparelhoClienteProfissionalEmp=gx.fn.getControlValue("APARELHOCLIENTEPROFISSIONALEMP") ;
      this.A9696AparelhoClienteProfissionalId=gx.fn.getIntegerValue("APARELHOCLIENTEPROFISSIONALID",'.') ;
      this.A9698AparelhoClienteSNVisitaAgenda=gx.fn.getControlValue("APARELHOCLIENTESNVISITAAGENDA") ;
      this.AV122AparelhoGridDescricao=gx.fn.getControlValue("vAPARELHOGRIDDESCRICAO") ;
      this.A8838AparelhoClienteCarac1EmpId=gx.fn.getControlValue("APARELHOCLIENTECARAC1EMPID") ;
      this.A8839AparelhoClienteCarac1Id=gx.fn.getIntegerValue("APARELHOCLIENTECARAC1ID",'.') ;
      this.A8840AparelhoClienteCarac2EmpId=gx.fn.getControlValue("APARELHOCLIENTECARAC2EMPID") ;
      this.A8841AparelhoClienteCarac2Id=gx.fn.getIntegerValue("APARELHOCLIENTECARAC2ID",'.') ;
      this.A8842AparelhoClienteCarac3EmpId=gx.fn.getControlValue("APARELHOCLIENTECARAC3EMPID") ;
      this.A8843AparelhoClienteCarac3Id=gx.fn.getIntegerValue("APARELHOCLIENTECARAC3ID",'.') ;
      this.A8844AparelhoClienteCarac4EmpId=gx.fn.getControlValue("APARELHOCLIENTECARAC4EMPID") ;
      this.A8845AparelhoClienteCarac4Id=gx.fn.getIntegerValue("APARELHOCLIENTECARAC4ID",'.') ;
      this.A9699AparelhoClienteDataNovaLigacao=gx.fn.getDateTimeValue("APARELHOCLIENTEDATANOVALIGACAO") ;
      this.AV161ValorConteudo=gx.fn.getControlValue("vVALORCONTEUDO") ;
      this.A445PessoaCliente=gx.fn.getControlValue("PESSOACLIENTE") ;
      this.AV127ContLinhas=gx.fn.getIntegerValue("vCONTLINHAS",'.') ;
      this.AV174AparelhoIdAux=gx.fn.getIntegerValue("vAPARELHOIDAUX",'.') ;
      this.A8921AparelhoCaracValorSituacao=gx.fn.getControlValue("APARELHOCARACVALORSITUACAO") ;
      this.AV159AparelhoCaracId=gx.fn.getIntegerValue("vAPARELHOCARACID",'.') ;
      this.A8827AparelhoCaracTipo=gx.fn.getIntegerValue("APARELHOCARACTIPO",'.') ;
      this.AV160Valor=gx.fn.getControlValue("vVALOR") ;
      this.AV121SdtAparelhoCliente=gx.fn.getControlValue("vSDTAPARELHOCLIENTE") ;
      this.A9686VisitaClienteDataAgenda=gx.fn.getDateValue("VISITACLIENTEDATAAGENDA") ;
      this.A9681VisitaClienteAparelhoCliSeqId=gx.fn.getIntegerValue("VISITACLIENTEAPARELHOCLISEQID",'.') ;
      this.A9685VisitaClienteAparelhoId=gx.fn.getIntegerValue("VISITACLIENTEAPARELHOID",'.') ;
      this.A9683VisitaClientePessoaId=gx.fn.getIntegerValue("VISITACLIENTEPESSOAID",'.') ;
      this.A9701VisitaClienteDataVisita=gx.fn.getDateValue("VISITACLIENTEDATAVISITA") ;
      this.A9700AparelhoPrazoManutencao=gx.fn.getIntegerValue("APARELHOPRAZOMANUTENCAO",'.') ;
      this.AV177VisitaClienteDataVisita=gx.fn.getDateValue("vVISITACLIENTEDATAVISITA") ;
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Aparelhoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAPARELHOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Principalaparelhocaracid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRINCIPALAPARELHOCARACID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Aparelhoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vAPARELHOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e141de2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e191de2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e201de2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e211de2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e111de2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151de2_client=function()
   {
      this.executeServerEvent("'ADICIONAREQUIPAMENTOCLIENTE'", true, null, false, false);
   };
   this.e221de2_client=function()
   {
      this.executeServerEvent("'AGENDAR'", true, arguments[0], false, false);
   };
   this.e121de2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131de2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e161de2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e251de2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261de2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.e271de1_client=function()
   {
      this.executeServerEvent("PROMPT_PESSOAID.GXPROMPT", true, null, false, true);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,31,33,38,41,44,46,48,50,52,55,57,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,106,109,112,114,117,119,120,123,125,126,127,128,129,130,131,132,133];
   this.GXLastCtrlId =133;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaequipamentocliente",[],false,1,true,true,0,false,false,false,"CollSdtAparelhoCliente.SdtAparelhoClienteItem",0,"px","Novo registro",true,false,false,null,null,false,"AV121SdtAparelhoCliente",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11P",61,"CTLAPARELHOID","Código","","AparelhoClienteAparelhoId","int",0,"px",4,4,"right",null,[],"GXV11P","GXV11P",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Q",62,"CTLAPARELHODESCRICAO","Descrição","","AparelhoDescricao","svchar",0,"px",25,25,"left",null,[],"GXV11Q","GXV11Q",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11R",63,"CTLAPARELHOCARACTERISTICAVLR1","","","AparelhoCaracteristicaVlr1","svchar",0,"px",30,30,"left",null,[],"GXV11R","GXV11R",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11S",64,"CTLAPARELHOCARACTERISTICAVLR2","","","AparelhoCaracteristicaVlr2","svchar",0,"px",30,30,"left",null,[],"GXV11S","GXV11S",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11T",65,"CTLAPARELHOCARACTERISTICAVLR3","","","AparelhoCaracteristicaVlr3","svchar",0,"px",30,30,"left",null,[],"GXV11T","GXV11T",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11U",66,"CTLAPARELHOCARACTERISTICAVLR4","","","AparelhoCaracteristicaVlr4","svchar",0,"px",30,30,"left",null,[],"GXV11U","GXV11U",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11V",67,"CTLAPARELHOCLIENTEDATANOVALIGACAO","Data Ligacao","","AparelhoClienteDataNovaLigacao","dtime",0,"px",16,16,"right",null,[],"GXV11V","GXV11V",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11W",68,"CTLAPARELHOCLIENTESEQID","Aparelho Cliente Seq Id","","AparelhoClienteSeqId","int",0,"px",4,4,"right",null,[],"GXV11W","GXV11W",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11X",69,"CTLAPARELHOCLIENTEPESSOAEMPID","Aparelho Cliente Pessoa Emp Id","","AparelhoClientePessoaEmpId","char",0,"px",10,10,"left",null,[],"GXV11X","GXV11X",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Y",70,"CTLAPARELHOCLIENTEPESSOAID","Aparelho Cliente Pessoa Id","","AparelhoClientePessoaId","int",0,"px",7,7,"right",null,[],"GXV11Y","GXV11Y",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Z",71,"CTLAPARELHOCLIENTEAPARELHOEMPID","Aparelho Cliente Aparelho Emp Id","","AparelhoClienteAparelhoEmpId","char",0,"px",10,10,"left",null,[],"GXV11Z","GXV11Z",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV120",72,"CTLAPARELHOCLIENTECARAC1EMPID","Aparelho Cliente Carac1 Emp Id","","AparelhoClienteCarac1EmpId","char",0,"px",10,10,"left",null,[],"GXV120","GXV120",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV121",73,"CTLAPARELHOCLIENTECARAC1ID","Aparelho Cliente Carac1 Id","","AparelhoClienteCarac1Id","int",0,"px",4,4,"right",null,[],"GXV121","GXV121",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV122",74,"CTLAPARELHOCLIENTECARAC2EMPID","Aparelho Cliente Carac2 Emp Id","","AparelhoClienteCarac2EmpId","char",0,"px",10,10,"left",null,[],"GXV122","GXV122",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV123",75,"CTLAPARELHOCLIENTECARAC2ID","Aparelho Cliente Carac2 Id","","AparelhoClienteCarac2Id","int",0,"px",4,4,"right",null,[],"GXV123","GXV123",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV124",76,"CTLAPARELHOCLIENTECARAC3EMPID","Aparelho Cliente Carac3 Emp Id","","AparelhoClienteCarac3EmpId","char",0,"px",10,10,"left",null,[],"GXV124","GXV124",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV125",77,"CTLAPARELHOCLIENTECARAC3ID","Aparelho Cliente Carac3 Id","","AparelhoClienteCarac3Id","int",0,"px",4,4,"right",null,[],"GXV125","GXV125",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV126",78,"CTLAPARELHOCLIENTECARAC4EMPID","Aparelho Cliente Carac4 Emp Id","","AparelhoClienteCarac4EmpId","char",0,"px",10,10,"left",null,[],"GXV126","GXV126",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV127",79,"CTLAPARELHOCLIENTECARAC4ID","Aparelho Cliente Carac4 Id","","AparelhoClienteCarac4Id","int",0,"px",4,4,"right",null,[],"GXV127","GXV127",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV128",80,"CTLAPARELHOCLIENTECARAC5EMPID","Aparelho Cliente Carac5 Emp Id","","AparelhoClienteCarac5EmpId","char",0,"px",10,10,"left",null,[],"GXV128","GXV128",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV129",81,"CTLAPARELHOCLIENTECARAC5ID","Aparelho Cliente Carac5 Id","","AparelhoClienteCarac5Id","int",0,"px",4,4,"right",null,[],"GXV129","GXV129",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12A",82,"CTLAPARELHOCLIENTECARAC6EMPID","Aparelho Cliente Carac6 Emp Id","","AparelhoClienteCarac6EmpId","char",0,"px",10,10,"left",null,[],"GXV12A","GXV12A",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12B",83,"CTLAPARELHOCLIENTECARAC6ID","Aparelho Cliente Carac6 Id","","AparelhoClienteCarac6Id","int",0,"px",4,4,"right",null,[],"GXV12B","GXV12B",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12C",84,"CTLAPARELHOCLIENTECARAC7EMPID","Aparelho Cliente Carac7 Emp Id","","AparelhoClienteCarac7EmpId","char",0,"px",10,10,"left",null,[],"GXV12C","GXV12C",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12D",85,"CTLAPARELHOCLIENTECARAC7ID","Aparelho Cliente Carac7 Id","","AparelhoClienteCarac7Id","int",0,"px",4,4,"right",null,[],"GXV12D","GXV12D",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12E",86,"CTLAPARELHOCLIENTECARAC8EMPID","Aparelho Cliente Carac8 Emp Id","","AparelhoClienteCarac8EmpId","char",0,"px",10,10,"left",null,[],"GXV12E","GXV12E",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12F",87,"CTLAPARELHOCLIENTECARAC8ID","Aparelho Cliente Carac8 Id","","AparelhoClienteCarac8Id","int",0,"px",4,4,"right",null,[],"GXV12F","GXV12F",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12G",88,"CTLAPARELHOCLIENTECARAC9EMPID","Aparelho Cliente Carac9 Emp Id","","AparelhoClienteCarac9EmpId","char",0,"px",10,10,"left",null,[],"GXV12G","GXV12G",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12H",89,"CTLAPARELHOCLIENTECARAC9ID","Aparelho Cliente Carac9 Id","","AparelhoClienteCarac9Id","int",0,"px",4,4,"right",null,[],"GXV12H","GXV12H",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12I",90,"CTLAPARELHOCARACTERISTICAVLR5","Aparelho Caracteristica Vlr5","","AparelhoCaracteristicaVlr5","svchar",0,"px",30,30,"left",null,[],"GXV12I","GXV12I",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12J",91,"CTLAPARELHOCARACTERISTICAVLR6","Aparelho Caracteristica Vlr6","","AparelhoCaracteristicaVlr6","svchar",0,"px",30,30,"left",null,[],"GXV12J","GXV12J",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12K",92,"CTLAPARELHOCARACTERISTICAVLR7","Aparelho Caracteristica Vlr7","","AparelhoCaracteristicaVlr7","svchar",0,"px",30,30,"left",null,[],"GXV12K","GXV12K",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12L",93,"CTLAPARELHOCARACTERISTICAVLR8","Aparelho Caracteristica Vlr8","","AparelhoCaracteristicaVlr8","svchar",0,"px",30,30,"left",null,[],"GXV12L","GXV12L",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV12M",94,"CTLAPARELHOCARACTERISTICAVLR9","Aparelho Caracteristica Vlr9","","AparelhoCaracteristicaVlr9","svchar",0,"px",30,30,"left",null,[],"GXV12M","GXV12M",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Aparelhoclientesnvisitaagenda",95,"vAPARELHOCLIENTESNVISITAAGENDA","Aparelho Cliente SNVisita Agenda","","AparelhoClienteSNVisitaAgenda","char",0,"px",1,1,"left",null,[],"Aparelhoclientesnvisitaagenda","AparelhoClienteSNVisitaAgenda",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpag","vBMPAG",96,0,"px",17,"px","e221de2_client","","Ag.","GridColumnImage","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",97,0,"px",17,"px","e191de2_client","","Alt","Image","");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",98,0,"px",17,"px","e201de2_client","","Con","Image","");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",99,0,"px",17,"px","e211de2_client","","Exc","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[8]={fld:"TABLECAMPOS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE4",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV71PessoaId",gxold:"OV71PessoaId",gxvar:"AV71PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV71PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV71PessoaId,0)},c2v:function(){gx.O.AV71PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANOME",gxz:"ZV73PessoaNome",gxold:"OV73PessoaNome",gxvar:"AV73PessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73PessoaNome=Value},v2z:function(Value){gx.O.ZV73PessoaNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOANOME",gx.O.AV73PessoaNome,0)},c2v:function(){gx.O.AV73PessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Aparelhoid,isvalid:null,rgrid:[],fld:"vAPARELHOID",gxz:"ZV67AparelhoId",gxold:"OV67AparelhoId",gxvar:"AV67AparelhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67AparelhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67AparelhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vAPARELHOID",gx.O.AV67AparelhoId,0)},c2v:function(){gx.O.AV67AparelhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vAPARELHOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHODESCRICAO",gxz:"ZV69AparelhoDescricao",gxold:"OV69AparelhoDescricao",gxvar:"AV69AparelhoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69AparelhoDescricao=Value},v2z:function(Value){gx.O.ZV69AparelhoDescricao=Value},v2c:function(){gx.fn.setControlValue("vAPARELHODESCRICAO",gx.O.AV69AparelhoDescricao,0)},c2v:function(){gx.O.AV69AparelhoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"LBLCARAC", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCARACVALORCONTEUDO",gxz:"ZV182AparelhoCaracValorConteudo",gxold:"OV182AparelhoCaracValorConteudo",gxvar:"AV182AparelhoCaracValorConteudo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV182AparelhoCaracValorConteudo=Value},v2z:function(Value){gx.O.ZV182AparelhoCaracValorConteudo=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOCARACVALORCONTEUDO",gx.O.AV182AparelhoCaracValorConteudo,0)},c2v:function(){gx.O.AV182AparelhoCaracValorConteudo=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOCARACVALORCONTEUDO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE1",grid:0};
   GXValidFnc[41]={fld:"TABLENAV",grid:0};
   GXValidFnc[44]={fld:"BTNINCLUIR",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"BTNHELP",grid:0};
   GXValidFnc[52]={fld:"TABLE5",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOID",gxz:"ZV188GXV11P",gxold:"OV188GXV11P",gxvar:"GXV11P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11P=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV188GXV11P=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11P,0)},c2v:function(){gx.O.GXV11P=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHODESCRICAO",gxz:"ZV189GXV11Q",gxold:"OV189GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Q=Value},v2z:function(Value){gx.O.ZV189GXV11Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHODESCRICAO",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11Q,0)},c2v:function(){gx.O.GXV11Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHODESCRICAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCARACTERISTICAVLR1",gxz:"ZV190GXV11R",gxold:"OV190GXV11R",gxvar:"GXV11R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11R=Value},v2z:function(Value){gx.O.ZV190GXV11R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCARACTERISTICAVLR1",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11R,0)},c2v:function(){gx.O.GXV11R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCARACTERISTICAVLR1",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCARACTERISTICAVLR2",gxz:"ZV191GXV11S",gxold:"OV191GXV11S",gxvar:"GXV11S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11S=Value},v2z:function(Value){gx.O.ZV191GXV11S=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCARACTERISTICAVLR2",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11S,0)},c2v:function(){gx.O.GXV11S=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCARACTERISTICAVLR2",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCARACTERISTICAVLR3",gxz:"ZV192GXV11T",gxold:"OV192GXV11T",gxvar:"GXV11T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11T=Value},v2z:function(Value){gx.O.ZV192GXV11T=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCARACTERISTICAVLR3",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11T,0)},c2v:function(){gx.O.GXV11T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCARACTERISTICAVLR3",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCARACTERISTICAVLR4",gxz:"ZV193GXV11U",gxold:"OV193GXV11U",gxvar:"GXV11U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11U=Value},v2z:function(Value){gx.O.ZV193GXV11U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCARACTERISTICAVLR4",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11U,0)},c2v:function(){gx.O.GXV11U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCARACTERISTICAVLR4",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTEDATANOVALIGACAO",gxz:"ZV194GXV11V",gxold:"OV194GXV11V",gxvar:"GXV11V",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11V=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV194GXV11V=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTEDATANOVALIGACAO",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11V,0)},c2v:function(){gx.O.GXV11V=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLAPARELHOCLIENTEDATANOVALIGACAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTESEQID",gxz:"ZV195GXV11W",gxold:"OV195GXV11W",gxvar:"GXV11W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11W=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV195GXV11W=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTESEQID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11W,0)},c2v:function(){gx.O.GXV11W=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTESEQID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTEPESSOAEMPID",gxz:"ZV196GXV11X",gxold:"OV196GXV11X",gxvar:"GXV11X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11X=Value},v2z:function(Value){gx.O.ZV196GXV11X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTEPESSOAEMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11X,0)},c2v:function(){gx.O.GXV11X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTEPESSOAEMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTEPESSOAID",gxz:"ZV197GXV11Y",gxold:"OV197GXV11Y",gxvar:"GXV11Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11Y=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV197GXV11Y=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTEPESSOAID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11Y,0)},c2v:function(){gx.O.GXV11Y=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTEPESSOAID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTEAPARELHOEMPID",gxz:"ZV198GXV11Z",gxold:"OV198GXV11Z",gxvar:"GXV11Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Z=Value},v2z:function(Value){gx.O.ZV198GXV11Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTEAPARELHOEMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV11Z,0)},c2v:function(){gx.O.GXV11Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTEAPARELHOEMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC1EMPID",gxz:"ZV199GXV120",gxold:"OV199GXV120",gxvar:"GXV120",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV120=Value},v2z:function(Value){gx.O.ZV199GXV120=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC1EMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV120,0)},c2v:function(){gx.O.GXV120=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTECARAC1EMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC1ID",gxz:"ZV200GXV121",gxold:"OV200GXV121",gxvar:"GXV121",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV121=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV200GXV121=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC1ID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV121,0)},c2v:function(){gx.O.GXV121=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTECARAC1ID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC2EMPID",gxz:"ZV201GXV122",gxold:"OV201GXV122",gxvar:"GXV122",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV122=Value},v2z:function(Value){gx.O.ZV201GXV122=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC2EMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV122,0)},c2v:function(){gx.O.GXV122=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTECARAC2EMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC2ID",gxz:"ZV202GXV123",gxold:"OV202GXV123",gxvar:"GXV123",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV123=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV202GXV123=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC2ID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV123,0)},c2v:function(){gx.O.GXV123=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTECARAC2ID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC3EMPID",gxz:"ZV203GXV124",gxold:"OV203GXV124",gxvar:"GXV124",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV124=Value},v2z:function(Value){gx.O.ZV203GXV124=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC3EMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV124,0)},c2v:function(){gx.O.GXV124=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTECARAC3EMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC3ID",gxz:"ZV204GXV125",gxold:"OV204GXV125",gxvar:"GXV125",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV125=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV204GXV125=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC3ID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV125,0)},c2v:function(){gx.O.GXV125=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTECARAC3ID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC4EMPID",gxz:"ZV205GXV126",gxold:"OV205GXV126",gxvar:"GXV126",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV126=Value},v2z:function(Value){gx.O.ZV205GXV126=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC4EMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV126,0)},c2v:function(){gx.O.GXV126=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTECARAC4EMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC4ID",gxz:"ZV206GXV127",gxold:"OV206GXV127",gxvar:"GXV127",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV127=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV206GXV127=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC4ID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV127,0)},c2v:function(){gx.O.GXV127=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTECARAC4ID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC5EMPID",gxz:"ZV207GXV128",gxold:"OV207GXV128",gxvar:"GXV128",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV128=Value},v2z:function(Value){gx.O.ZV207GXV128=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC5EMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV128,0)},c2v:function(){gx.O.GXV128=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTECARAC5EMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC5ID",gxz:"ZV208GXV129",gxold:"OV208GXV129",gxvar:"GXV129",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV129=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV208GXV129=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC5ID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV129,0)},c2v:function(){gx.O.GXV129=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTECARAC5ID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC6EMPID",gxz:"ZV209GXV12A",gxold:"OV209GXV12A",gxvar:"GXV12A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12A=Value},v2z:function(Value){gx.O.ZV209GXV12A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC6EMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12A,0)},c2v:function(){gx.O.GXV12A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTECARAC6EMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC6ID",gxz:"ZV210GXV12B",gxold:"OV210GXV12B",gxvar:"GXV12B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12B=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV210GXV12B=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC6ID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12B,0)},c2v:function(){gx.O.GXV12B=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTECARAC6ID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC7EMPID",gxz:"ZV211GXV12C",gxold:"OV211GXV12C",gxvar:"GXV12C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12C=Value},v2z:function(Value){gx.O.ZV211GXV12C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC7EMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12C,0)},c2v:function(){gx.O.GXV12C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTECARAC7EMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC7ID",gxz:"ZV212GXV12D",gxold:"OV212GXV12D",gxvar:"GXV12D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12D=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV212GXV12D=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC7ID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12D,0)},c2v:function(){gx.O.GXV12D=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTECARAC7ID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC8EMPID",gxz:"ZV213GXV12E",gxold:"OV213GXV12E",gxvar:"GXV12E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12E=Value},v2z:function(Value){gx.O.ZV213GXV12E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC8EMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12E,0)},c2v:function(){gx.O.GXV12E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTECARAC8EMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC8ID",gxz:"ZV214GXV12F",gxold:"OV214GXV12F",gxvar:"GXV12F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12F=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV214GXV12F=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC8ID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12F,0)},c2v:function(){gx.O.GXV12F=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTECARAC8ID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC9EMPID",gxz:"ZV215GXV12G",gxold:"OV215GXV12G",gxvar:"GXV12G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12G=Value},v2z:function(Value){gx.O.ZV215GXV12G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC9EMPID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12G,0)},c2v:function(){gx.O.GXV12G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCLIENTECARAC9EMPID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCLIENTECARAC9ID",gxz:"ZV216GXV12H",gxold:"OV216GXV12H",gxvar:"GXV12H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV12H=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV216GXV12H=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCLIENTECARAC9ID",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12H,0)},c2v:function(){gx.O.GXV12H=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLAPARELHOCLIENTECARAC9ID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCARACTERISTICAVLR5",gxz:"ZV217GXV12I",gxold:"OV217GXV12I",gxvar:"GXV12I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12I=Value},v2z:function(Value){gx.O.ZV217GXV12I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCARACTERISTICAVLR5",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12I,0)},c2v:function(){gx.O.GXV12I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCARACTERISTICAVLR5",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCARACTERISTICAVLR6",gxz:"ZV218GXV12J",gxold:"OV218GXV12J",gxvar:"GXV12J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12J=Value},v2z:function(Value){gx.O.ZV218GXV12J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCARACTERISTICAVLR6",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12J,0)},c2v:function(){gx.O.GXV12J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCARACTERISTICAVLR6",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCARACTERISTICAVLR7",gxz:"ZV219GXV12K",gxold:"OV219GXV12K",gxvar:"GXV12K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12K=Value},v2z:function(Value){gx.O.ZV219GXV12K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCARACTERISTICAVLR7",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12K,0)},c2v:function(){gx.O.GXV12K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCARACTERISTICAVLR7",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCARACTERISTICAVLR8",gxz:"ZV220GXV12L",gxold:"OV220GXV12L",gxvar:"GXV12L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12L=Value},v2z:function(Value){gx.O.ZV220GXV12L=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCARACTERISTICAVLR8",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12L,0)},c2v:function(){gx.O.GXV12L=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCARACTERISTICAVLR8",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLAPARELHOCARACTERISTICAVLR9",gxz:"ZV221GXV12M",gxold:"OV221GXV12M",gxvar:"GXV12M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV12M=Value},v2z:function(Value){gx.O.ZV221GXV12M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLAPARELHOCARACTERISTICAVLR9",row || gx.fn.currentGridRowImpl(60),gx.O.GXV12M,0)},c2v:function(){gx.O.GXV12M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLAPARELHOCARACTERISTICAVLR9",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vAPARELHOCLIENTESNVISITAAGENDA",gxz:"ZV167AparelhoClienteSNVisitaAgenda",gxold:"OV167AparelhoClienteSNVisitaAgenda",gxvar:"AV167AparelhoClienteSNVisitaAgenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV167AparelhoClienteSNVisitaAgenda=Value},v2z:function(Value){gx.O.ZV167AparelhoClienteSNVisitaAgenda=Value},v2c:function(row){gx.fn.setGridControlValue("vAPARELHOCLIENTESNVISITAAGENDA",row || gx.fn.currentGridRowImpl(60),gx.O.AV167AparelhoClienteSNVisitaAgenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV167AparelhoClienteSNVisitaAgenda=this.val()},val:function(row){return gx.fn.getGridControlValue("vAPARELHOCLIENTESNVISITAAGENDA",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPAG",gxz:"ZV168bmpAg",gxold:"OV168bmpAg",gxvar:"AV168bmpAg",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV168bmpAg=Value},v2z:function(Value){gx.O.ZV168bmpAg=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPAG",row || gx.fn.currentGridRowImpl(60),gx.O.AV168bmpAg,gx.O.AV227Bmpag_GXI)},c2v:function(){gx.O.AV227Bmpag_GXI=this.val_GXI();gx.O.AV168bmpAg=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPAG",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPAG_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV227Bmpag_GXI',nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(60),gx.O.AV7bmpAlt,gx.O.AV224Bmpalt_GXI)},c2v:function(){gx.O.AV224Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV224Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpCon,gx.O.AV226Bmpcon_GXI)},c2v:function(){gx.O.AV226Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV226Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60),gx.O.AV8bmpExc,gx.O.AV225Bmpexc_GXI)},c2v:function(){gx.O.AV225Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV225Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[106]={fld:"TABLEVARS",grid:0};
   GXValidFnc[109]={fld:"TABLE6",grid:0};
   GXValidFnc[112]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIAPARELHOCARACDESCRICAO",gxz:"ZV179PRIAparelhoCaracDescricao",gxold:"OV179PRIAparelhoCaracDescricao",gxvar:"AV179PRIAparelhoCaracDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV179PRIAparelhoCaracDescricao=Value},v2z:function(Value){gx.O.ZV179PRIAparelhoCaracDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRIAPARELHOCARACDESCRICAO",gx.O.AV179PRIAparelhoCaracDescricao,0)},c2v:function(){gx.O.AV179PRIAparelhoCaracDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRIAPARELHOCARACDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIAPARELHOCARACTIPO",gxz:"ZV180PRIAparelhoCaracTipo",gxold:"OV180PRIAparelhoCaracTipo",gxvar:"AV180PRIAparelhoCaracTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV180PRIAparelhoCaracTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV180PRIAparelhoCaracTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRIAPARELHOCARACTIPO",gx.O.AV180PRIAparelhoCaracTipo,0)},c2v:function(){gx.O.AV180PRIAparelhoCaracTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRIAPARELHOCARACTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[120]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRIAPARELHOCARACORDENACAO",gxz:"ZV184PRIAparelhoCaracOrdenacao",gxold:"OV184PRIAparelhoCaracOrdenacao",gxvar:"AV184PRIAparelhoCaracOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV184PRIAparelhoCaracOrdenacao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV184PRIAparelhoCaracOrdenacao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRIAPARELHOCARACORDENACAO",gx.O.AV184PRIAparelhoCaracOrdenacao,0)},c2v:function(){gx.O.AV184PRIAparelhoCaracOrdenacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRIAPARELHOCARACORDENACAO",'.')},nac:gx.falseFn};
   GXValidFnc[123]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Principalaparelhocaracid,isvalid:null,rgrid:[],fld:"vPRINCIPALAPARELHOCARACID",gxz:"ZV181PRINCIPALAPARELHOCARACID",gxold:"OV181PRINCIPALAPARELHOCARACID",gxvar:"AV181PRINCIPALAPARELHOCARACID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV181PRINCIPALAPARELHOCARACID=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV181PRINCIPALAPARELHOCARACID=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRINCIPALAPARELHOCARACID",gx.O.AV181PRINCIPALAPARELHOCARACID,0)},c2v:function(){gx.O.AV181PRINCIPALAPARELHOCARACID=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRINCIPALAPARELHOCARACID",'.')},nac:gx.falseFn};
   GXValidFnc[126]={fld:"JS", format:2,grid:0};
   GXValidFnc[127]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDELIMITAJSON",gxz:"ZV72DelimitaJson",gxold:"OV72DelimitaJson",gxvar:"AV72DelimitaJson",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72DelimitaJson=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV72DelimitaJson=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDELIMITAJSON",gx.O.AV72DelimitaJson,0)},c2v:function(){gx.O.AV72DelimitaJson=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDELIMITAJSON",'.')},nac:gx.falseFn};
   GXValidFnc[128]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV70PessoaEmpresaId",gxold:"OV70PessoaEmpresaId",gxvar:"AV70PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV70PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV70PessoaEmpresaId,0)},c2v:function(){gx.O.AV70PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[129]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Aparelhoempresaid,isvalid:null,rgrid:[],fld:"vAPARELHOEMPRESAID",gxz:"ZV68AparelhoEmpresaId",gxold:"OV68AparelhoEmpresaId",gxvar:"AV68AparelhoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68AparelhoEmpresaId=Value},v2z:function(Value){gx.O.ZV68AparelhoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vAPARELHOEMPRESAID",gx.O.AV68AparelhoEmpresaId,0)},c2v:function(){gx.O.AV68AparelhoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vAPARELHOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[130]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCONSISTETELA",gxz:"ZV123SNConsisteTela",gxold:"OV123SNConsisteTela",gxvar:"AV123SNConsisteTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123SNConsisteTela=Value},v2z:function(Value){gx.O.ZV123SNConsisteTela=Value},v2c:function(){gx.fn.setControlValue("vSNCONSISTETELA",gx.O.AV123SNConsisteTela,0)},c2v:function(){gx.O.AV123SNConsisteTela=this.val()},val:function(){return gx.fn.getControlValue("vSNCONSISTETELA")},nac:gx.falseFn};
   GXValidFnc[131]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[132]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[133]={fld:"PROMPT_APARELHOID",grid:0};
   this.AV71PessoaId = 0 ;
   this.ZV71PessoaId = 0 ;
   this.OV71PessoaId = 0 ;
   this.AV73PessoaNome = "" ;
   this.ZV73PessoaNome = "" ;
   this.OV73PessoaNome = "" ;
   this.AV67AparelhoId = 0 ;
   this.ZV67AparelhoId = 0 ;
   this.OV67AparelhoId = 0 ;
   this.AV69AparelhoDescricao = "" ;
   this.ZV69AparelhoDescricao = "" ;
   this.OV69AparelhoDescricao = "" ;
   this.AV182AparelhoCaracValorConteudo = "" ;
   this.ZV182AparelhoCaracValorConteudo = "" ;
   this.OV182AparelhoCaracValorConteudo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.ZV188GXV11P = 0 ;
   this.OV188GXV11P = 0 ;
   this.ZV189GXV11Q = "" ;
   this.OV189GXV11Q = "" ;
   this.ZV190GXV11R = "" ;
   this.OV190GXV11R = "" ;
   this.ZV191GXV11S = "" ;
   this.OV191GXV11S = "" ;
   this.ZV192GXV11T = "" ;
   this.OV192GXV11T = "" ;
   this.ZV193GXV11U = "" ;
   this.OV193GXV11U = "" ;
   this.ZV194GXV11V = gx.date.nullDate() ;
   this.OV194GXV11V = gx.date.nullDate() ;
   this.ZV195GXV11W = 0 ;
   this.OV195GXV11W = 0 ;
   this.ZV196GXV11X = "" ;
   this.OV196GXV11X = "" ;
   this.ZV197GXV11Y = 0 ;
   this.OV197GXV11Y = 0 ;
   this.ZV198GXV11Z = "" ;
   this.OV198GXV11Z = "" ;
   this.ZV199GXV120 = "" ;
   this.OV199GXV120 = "" ;
   this.ZV200GXV121 = 0 ;
   this.OV200GXV121 = 0 ;
   this.ZV201GXV122 = "" ;
   this.OV201GXV122 = "" ;
   this.ZV202GXV123 = 0 ;
   this.OV202GXV123 = 0 ;
   this.ZV203GXV124 = "" ;
   this.OV203GXV124 = "" ;
   this.ZV204GXV125 = 0 ;
   this.OV204GXV125 = 0 ;
   this.ZV205GXV126 = "" ;
   this.OV205GXV126 = "" ;
   this.ZV206GXV127 = 0 ;
   this.OV206GXV127 = 0 ;
   this.ZV207GXV128 = "" ;
   this.OV207GXV128 = "" ;
   this.ZV208GXV129 = 0 ;
   this.OV208GXV129 = 0 ;
   this.ZV209GXV12A = "" ;
   this.OV209GXV12A = "" ;
   this.ZV210GXV12B = 0 ;
   this.OV210GXV12B = 0 ;
   this.ZV211GXV12C = "" ;
   this.OV211GXV12C = "" ;
   this.ZV212GXV12D = 0 ;
   this.OV212GXV12D = 0 ;
   this.ZV213GXV12E = "" ;
   this.OV213GXV12E = "" ;
   this.ZV214GXV12F = 0 ;
   this.OV214GXV12F = 0 ;
   this.ZV215GXV12G = "" ;
   this.OV215GXV12G = "" ;
   this.ZV216GXV12H = 0 ;
   this.OV216GXV12H = 0 ;
   this.ZV217GXV12I = "" ;
   this.OV217GXV12I = "" ;
   this.ZV218GXV12J = "" ;
   this.OV218GXV12J = "" ;
   this.ZV219GXV12K = "" ;
   this.OV219GXV12K = "" ;
   this.ZV220GXV12L = "" ;
   this.OV220GXV12L = "" ;
   this.ZV221GXV12M = "" ;
   this.OV221GXV12M = "" ;
   this.ZV167AparelhoClienteSNVisitaAgenda = "" ;
   this.OV167AparelhoClienteSNVisitaAgenda = "" ;
   this.ZV168bmpAg = "" ;
   this.OV168bmpAg = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.AV179PRIAparelhoCaracDescricao = "" ;
   this.ZV179PRIAparelhoCaracDescricao = "" ;
   this.OV179PRIAparelhoCaracDescricao = "" ;
   this.AV180PRIAparelhoCaracTipo = 0 ;
   this.ZV180PRIAparelhoCaracTipo = 0 ;
   this.OV180PRIAparelhoCaracTipo = 0 ;
   this.AV184PRIAparelhoCaracOrdenacao = 0 ;
   this.ZV184PRIAparelhoCaracOrdenacao = 0 ;
   this.OV184PRIAparelhoCaracOrdenacao = 0 ;
   this.AV181PRINCIPALAPARELHOCARACID = 0 ;
   this.ZV181PRINCIPALAPARELHOCARACID = 0 ;
   this.OV181PRINCIPALAPARELHOCARACID = 0 ;
   this.AV72DelimitaJson = 0 ;
   this.ZV72DelimitaJson = 0 ;
   this.OV72DelimitaJson = 0 ;
   this.AV70PessoaEmpresaId = "" ;
   this.ZV70PessoaEmpresaId = "" ;
   this.OV70PessoaEmpresaId = "" ;
   this.AV68AparelhoEmpresaId = "" ;
   this.ZV68AparelhoEmpresaId = "" ;
   this.OV68AparelhoEmpresaId = "" ;
   this.AV123SNConsisteTela = "" ;
   this.ZV123SNConsisteTela = "" ;
   this.OV123SNConsisteTela = "" ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV71PessoaId = 0 ;
   this.AV73PessoaNome = "" ;
   this.AV67AparelhoId = 0 ;
   this.AV69AparelhoDescricao = "" ;
   this.AV182AparelhoCaracValorConteudo = "" ;
   this.AV5Pagina = 0 ;
   this.AV179PRIAparelhoCaracDescricao = "" ;
   this.AV180PRIAparelhoCaracTipo = 0 ;
   this.AV184PRIAparelhoCaracOrdenacao = 0 ;
   this.AV181PRINCIPALAPARELHOCARACID = 0 ;
   this.AV72DelimitaJson = 0 ;
   this.AV70PessoaEmpresaId = "" ;
   this.AV68AparelhoEmpresaId = "" ;
   this.AV123SNConsisteTela = "" ;
   this.AV6PaginaAux = 0 ;
   this.GXV11P = 0 ;
   this.GXV11Q = "" ;
   this.GXV11R = "" ;
   this.GXV11S = "" ;
   this.GXV11T = "" ;
   this.GXV11U = "" ;
   this.GXV11V = gx.date.nullDate() ;
   this.GXV11W = 0 ;
   this.GXV11X = "" ;
   this.GXV11Y = 0 ;
   this.GXV11Z = "" ;
   this.GXV120 = "" ;
   this.GXV121 = 0 ;
   this.GXV122 = "" ;
   this.GXV123 = 0 ;
   this.GXV124 = "" ;
   this.GXV125 = 0 ;
   this.GXV126 = "" ;
   this.GXV127 = 0 ;
   this.GXV128 = "" ;
   this.GXV129 = 0 ;
   this.GXV12A = "" ;
   this.GXV12B = 0 ;
   this.GXV12C = "" ;
   this.GXV12D = 0 ;
   this.GXV12E = "" ;
   this.GXV12F = 0 ;
   this.GXV12G = "" ;
   this.GXV12H = 0 ;
   this.GXV12I = "" ;
   this.GXV12J = "" ;
   this.GXV12K = "" ;
   this.GXV12L = "" ;
   this.GXV12M = "" ;
   this.AV167AparelhoClienteSNVisitaAgenda = "" ;
   this.AV168bmpAg = "" ;
   this.AV7bmpAlt = "" ;
   this.AV16bmpCon = "" ;
   this.AV8bmpExc = "" ;
   this.A8824AparelhoEmpresaId = "" ;
   this.A8825AparelhoId = 0 ;
   this.A9700AparelhoPrazoManutencao = 0 ;
   this.A9683VisitaClientePessoaId = 0 ;
   this.A9685VisitaClienteAparelhoId = 0 ;
   this.A9681VisitaClienteAparelhoCliSeqId = 0 ;
   this.A9701VisitaClienteDataVisita = gx.date.nullDate() ;
   this.A9686VisitaClienteDataAgenda = gx.date.nullDate() ;
   this.A8837AparelhoCaracValorId = 0 ;
   this.A8827AparelhoCaracTipo = 0 ;
   this.A8832AparelhoCaracId = 0 ;
   this.A8921AparelhoCaracValorSituacao = "" ;
   this.A8833AparelhoCaracEmpresaId = "" ;
   this.A8834AparelhoCaracValorConteudo = "" ;
   this.A8821AparelhoDescricao = "" ;
   this.A8864AparelhoCaracteristicaVlr9 = "" ;
   this.A8863AparelhoCaracteristicaVlr8 = "" ;
   this.A8862AparelhoCaracteristicaVlr7 = "" ;
   this.A8861AparelhoCaracteristicaVlr6 = "" ;
   this.A8860AparelhoCaracteristicaVlr5 = "" ;
   this.A8859AparelhoCaracteristicaVlr4 = "" ;
   this.A8858AparelhoCaracteristicaVlr3 = "" ;
   this.A8857AparelhoCaracteristicaVlr2 = "" ;
   this.A8856AparelhoCaracteristicaVlr1 = "" ;
   this.A9694AparelhoClienteAparelhoId = 0 ;
   this.A9693AparelhoClienteAparelhoEmpId = "" ;
   this.A9691AparelhoClientePessoaId = 0 ;
   this.A9692AparelhoClientePessoaEmpId = "" ;
   this.A9695AparelhoClienteProfissionalEmp = "" ;
   this.A9696AparelhoClienteProfissionalId = 0 ;
   this.A9698AparelhoClienteSNVisitaAgenda = "" ;
   this.A8838AparelhoClienteCarac1EmpId = "" ;
   this.A8839AparelhoClienteCarac1Id = 0 ;
   this.A8840AparelhoClienteCarac2EmpId = "" ;
   this.A8841AparelhoClienteCarac2Id = 0 ;
   this.A8842AparelhoClienteCarac3EmpId = "" ;
   this.A8843AparelhoClienteCarac3Id = 0 ;
   this.A8844AparelhoClienteCarac4EmpId = "" ;
   this.A8845AparelhoClienteCarac4Id = 0 ;
   this.A9699AparelhoClienteDataNovaLigacao = gx.date.nullDate() ;
   this.A8865AparelhoClienteSeqId = 0 ;
   this.A445PessoaCliente = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A8920AparelhoCaracSituacao = "" ;
   this.A8826AparelhoCaracDescricao = "" ;
   this.A8828AparelhoCaracOrdenacao = 0 ;
   this.AV223Pgmname = "" ;
   this.AV74AparelhoCaracEmpresaId = "" ;
   this.AV183ListaValorCarac = [ ] ;
   this.AV122AparelhoGridDescricao = "" ;
   this.AV161ValorConteudo = "" ;
   this.AV127ContLinhas = 0 ;
   this.AV174AparelhoIdAux = 0 ;
   this.AV159AparelhoCaracId = 0 ;
   this.AV160Valor = "" ;
   this.AV121SdtAparelhoCliente = [ ] ;
   this.AV177VisitaClienteDataVisita = gx.date.nullDate() ;
   this.Events = {"e141de2_client": ["'PROCURAR'", true] ,"e191de2_client": ["'ALTERAR'", true] ,"e201de2_client": ["'CONSULTAR'", true] ,"e211de2_client": ["'EXCLUIR'", true] ,"e111de2_client": ["'FECHAR'", true] ,"e151de2_client": ["'ADICIONAREQUIPAMENTOCLIENTE'", true] ,"e221de2_client": ["'AGENDAR'", true] ,"e121de2_client": ["'GXM_PREVIOUS'", true] ,"e131de2_client": ["'GXM_NEXT'", true] ,"e161de2_client": ["VPAGINA.CLICK", true] ,"e251de2_client": ["ENTER", true] ,"e261de2_client": ["CANCEL", true] ,"e271de1_client": ["PROMPT_PESSOAID.GXPROMPT", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV168bmpAg',fld:'vBMPAG'},{av:'gx.fn.getCtrlProperty("vBMPAG","Tooltiptext")',ctrl:'vBMPAG',prop:'Tooltiptext'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'A9686VisitaClienteDataAgenda',fld:'VISITACLIENTEDATAAGENDA'},{av:'A9681VisitaClienteAparelhoCliSeqId',fld:'VISITACLIENTEAPARELHOCLISEQID'},{av:'A9685VisitaClienteAparelhoId',fld:'VISITACLIENTEAPARELHOID'},{av:'A9683VisitaClientePessoaId',fld:'VISITACLIENTEPESSOAID'},{av:'A9701VisitaClienteDataVisita',fld:'VISITACLIENTEDATAVISITA'},{av:'A9700AparelhoPrazoManutencao',fld:'APARELHOPRAZOMANUTENCAO'},{av:'AV177VisitaClienteDataVisita',fld:'vVISITACLIENTEDATAVISITA'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV180PRIAparelhoCaracTipo',fld:'vPRIAPARELHOCARACTIPO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV181PRINCIPALAPARELHOCARACID',fld:'vPRINCIPALAPARELHOCARACID'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV74AparelhoCaracEmpresaId',fld:'vAPARELHOCARACEMPRESAID'},{av:'A8834AparelhoCaracValorConteudo',fld:'APARELHOCARACVALORCONTEUDO'},{av:'AV182AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'A8865AparelhoClienteSeqId',fld:'APARELHOCLIENTESEQID'},{av:'A9692AparelhoClientePessoaEmpId',fld:'APARELHOCLIENTEPESSOAEMPID'},{av:'A9691AparelhoClientePessoaId',fld:'APARELHOCLIENTEPESSOAID'},{av:'A9693AparelhoClienteAparelhoEmpId',fld:'APARELHOCLIENTEAPARELHOEMPID'},{av:'A9694AparelhoClienteAparelhoId',fld:'APARELHOCLIENTEAPARELHOID'},{av:'AV184PRIAparelhoCaracOrdenacao',fld:'vPRIAPARELHOCARACORDENACAO'},{av:'A8856AparelhoCaracteristicaVlr1',fld:'APARELHOCARACTERISTICAVLR1'},{av:'A8857AparelhoCaracteristicaVlr2',fld:'APARELHOCARACTERISTICAVLR2'},{av:'A8858AparelhoCaracteristicaVlr3',fld:'APARELHOCARACTERISTICAVLR3'},{av:'A8859AparelhoCaracteristicaVlr4',fld:'APARELHOCARACTERISTICAVLR4'},{av:'A8860AparelhoCaracteristicaVlr5',fld:'APARELHOCARACTERISTICAVLR5'},{av:'A8861AparelhoCaracteristicaVlr6',fld:'APARELHOCARACTERISTICAVLR6'},{av:'A8862AparelhoCaracteristicaVlr7',fld:'APARELHOCARACTERISTICAVLR7'},{av:'A8863AparelhoCaracteristicaVlr8',fld:'APARELHOCARACTERISTICAVLR8'},{av:'A8864AparelhoCaracteristicaVlr9',fld:'APARELHOCARACTERISTICAVLR9'},{av:'A9695AparelhoClienteProfissionalEmp',fld:'APARELHOCLIENTEPROFISSIONALEMP'},{av:'A9696AparelhoClienteProfissionalId',fld:'APARELHOCLIENTEPROFISSIONALID'},{av:'A9698AparelhoClienteSNVisitaAgenda',fld:'APARELHOCLIENTESNVISITAAGENDA'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'A8838AparelhoClienteCarac1EmpId',fld:'APARELHOCLIENTECARAC1EMPID'},{av:'A8839AparelhoClienteCarac1Id',fld:'APARELHOCLIENTECARAC1ID'},{av:'A8840AparelhoClienteCarac2EmpId',fld:'APARELHOCLIENTECARAC2EMPID'},{av:'A8841AparelhoClienteCarac2Id',fld:'APARELHOCLIENTECARAC2ID'},{av:'A8842AparelhoClienteCarac3EmpId',fld:'APARELHOCLIENTECARAC3EMPID'},{av:'A8843AparelhoClienteCarac3Id',fld:'APARELHOCLIENTECARAC3ID'},{av:'A8844AparelhoClienteCarac4EmpId',fld:'APARELHOCLIENTECARAC4EMPID'},{av:'A8845AparelhoClienteCarac4Id',fld:'APARELHOCLIENTECARAC4ID'},{av:'A9699AparelhoClienteDataNovaLigacao',fld:'APARELHOCLIENTEDATANOVALIGACAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'A8921AparelhoCaracValorSituacao',fld:'APARELHOCARACVALORSITUACAO'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV160Valor',fld:'vVALOR'}],[{av:'AV135filtros',fld:'vFILTROS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV138ContLinhas2',fld:'vCONTLINHAS2'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV69AparelhoDescricao',fld:'vAPARELHODESCRICAO'},{av:'AV73PessoaNome',fld:'vPESSOANOME'},{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'AV126SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV160Valor',fld:'vVALOR'},{av:'AV232GXLvl219',fld:'vGXLVL219'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV168bmpAg',fld:'vBMPAG'},{av:'gx.fn.getCtrlProperty("vBMPAG","Tooltiptext")',ctrl:'vBMPAG',prop:'Tooltiptext'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV180PRIAparelhoCaracTipo',fld:'vPRIAPARELHOCARACTIPO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV181PRINCIPALAPARELHOCARACID',fld:'vPRINCIPALAPARELHOCARACID'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV74AparelhoCaracEmpresaId',fld:'vAPARELHOCARACEMPRESAID'},{av:'A8834AparelhoCaracValorConteudo',fld:'APARELHOCARACVALORCONTEUDO'},{av:'AV182AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'A8865AparelhoClienteSeqId',fld:'APARELHOCLIENTESEQID'},{av:'A9692AparelhoClientePessoaEmpId',fld:'APARELHOCLIENTEPESSOAEMPID'},{av:'A9691AparelhoClientePessoaId',fld:'APARELHOCLIENTEPESSOAID'},{av:'A9693AparelhoClienteAparelhoEmpId',fld:'APARELHOCLIENTEAPARELHOEMPID'},{av:'A9694AparelhoClienteAparelhoId',fld:'APARELHOCLIENTEAPARELHOID'},{av:'AV184PRIAparelhoCaracOrdenacao',fld:'vPRIAPARELHOCARACORDENACAO'},{av:'A8856AparelhoCaracteristicaVlr1',fld:'APARELHOCARACTERISTICAVLR1'},{av:'A8857AparelhoCaracteristicaVlr2',fld:'APARELHOCARACTERISTICAVLR2'},{av:'A8858AparelhoCaracteristicaVlr3',fld:'APARELHOCARACTERISTICAVLR3'},{av:'A8859AparelhoCaracteristicaVlr4',fld:'APARELHOCARACTERISTICAVLR4'},{av:'A8860AparelhoCaracteristicaVlr5',fld:'APARELHOCARACTERISTICAVLR5'},{av:'A8861AparelhoCaracteristicaVlr6',fld:'APARELHOCARACTERISTICAVLR6'},{av:'A8862AparelhoCaracteristicaVlr7',fld:'APARELHOCARACTERISTICAVLR7'},{av:'A8863AparelhoCaracteristicaVlr8',fld:'APARELHOCARACTERISTICAVLR8'},{av:'A8864AparelhoCaracteristicaVlr9',fld:'APARELHOCARACTERISTICAVLR9'},{av:'A9695AparelhoClienteProfissionalEmp',fld:'APARELHOCLIENTEPROFISSIONALEMP'},{av:'A9696AparelhoClienteProfissionalId',fld:'APARELHOCLIENTEPROFISSIONALID'},{av:'A9698AparelhoClienteSNVisitaAgenda',fld:'APARELHOCLIENTESNVISITAAGENDA'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'A8838AparelhoClienteCarac1EmpId',fld:'APARELHOCLIENTECARAC1EMPID'},{av:'A8839AparelhoClienteCarac1Id',fld:'APARELHOCLIENTECARAC1ID'},{av:'A8840AparelhoClienteCarac2EmpId',fld:'APARELHOCLIENTECARAC2EMPID'},{av:'A8841AparelhoClienteCarac2Id',fld:'APARELHOCLIENTECARAC2ID'},{av:'A8842AparelhoClienteCarac3EmpId',fld:'APARELHOCLIENTECARAC3EMPID'},{av:'A8843AparelhoClienteCarac3Id',fld:'APARELHOCLIENTECARAC3ID'},{av:'A8844AparelhoClienteCarac4EmpId',fld:'APARELHOCLIENTECARAC4EMPID'},{av:'A8845AparelhoClienteCarac4Id',fld:'APARELHOCLIENTECARAC4ID'},{av:'A9699AparelhoClienteDataNovaLigacao',fld:'APARELHOCLIENTEDATANOVALIGACAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'A8921AparelhoCaracValorSituacao',fld:'APARELHOCARACVALORSITUACAO'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV160Valor',fld:'vVALOR'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'A9686VisitaClienteDataAgenda',fld:'VISITACLIENTEDATAAGENDA'},{av:'A9681VisitaClienteAparelhoCliSeqId',fld:'VISITACLIENTEAPARELHOCLISEQID'},{av:'A9685VisitaClienteAparelhoId',fld:'VISITACLIENTEAPARELHOID'},{av:'A9683VisitaClientePessoaId',fld:'VISITACLIENTEPESSOAID'},{av:'A9701VisitaClienteDataVisita',fld:'VISITACLIENTEDATAVISITA'},{av:'A9700AparelhoPrazoManutencao',fld:'APARELHOPRAZOMANUTENCAO'},{av:'AV177VisitaClienteDataVisita',fld:'vVISITACLIENTEDATAVISITA'}],[{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV232GXLvl219',fld:'vGXLVL219'},{av:'AV135filtros',fld:'vFILTROS'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'AV126SdtAparelhoClienteItem',fld:'vSDTAPARELHOCLIENTEITEM'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'AV160Valor',fld:'vVALOR'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true}],[{av:'AV135filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true}],[{av:'AV135filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true}],[{av:'AV135filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true}],[]];
   this.EvtParms["'ADICIONAREQUIPAMENTOCLIENTE'"] = [[{av:'AV133AparelhoClienteSeqId',fld:'vAPARELHOCLIENTESEQID'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV168bmpAg',fld:'vBMPAG'},{av:'gx.fn.getCtrlProperty("vBMPAG","Tooltiptext")',ctrl:'vBMPAG',prop:'Tooltiptext'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV180PRIAparelhoCaracTipo',fld:'vPRIAPARELHOCARACTIPO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV181PRINCIPALAPARELHOCARACID',fld:'vPRINCIPALAPARELHOCARACID'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV74AparelhoCaracEmpresaId',fld:'vAPARELHOCARACEMPRESAID'},{av:'A8834AparelhoCaracValorConteudo',fld:'APARELHOCARACVALORCONTEUDO'},{av:'AV182AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'A8865AparelhoClienteSeqId',fld:'APARELHOCLIENTESEQID'},{av:'A9692AparelhoClientePessoaEmpId',fld:'APARELHOCLIENTEPESSOAEMPID'},{av:'A9691AparelhoClientePessoaId',fld:'APARELHOCLIENTEPESSOAID'},{av:'A9693AparelhoClienteAparelhoEmpId',fld:'APARELHOCLIENTEAPARELHOEMPID'},{av:'A9694AparelhoClienteAparelhoId',fld:'APARELHOCLIENTEAPARELHOID'},{av:'AV184PRIAparelhoCaracOrdenacao',fld:'vPRIAPARELHOCARACORDENACAO'},{av:'A8856AparelhoCaracteristicaVlr1',fld:'APARELHOCARACTERISTICAVLR1'},{av:'A8857AparelhoCaracteristicaVlr2',fld:'APARELHOCARACTERISTICAVLR2'},{av:'A8858AparelhoCaracteristicaVlr3',fld:'APARELHOCARACTERISTICAVLR3'},{av:'A8859AparelhoCaracteristicaVlr4',fld:'APARELHOCARACTERISTICAVLR4'},{av:'A8860AparelhoCaracteristicaVlr5',fld:'APARELHOCARACTERISTICAVLR5'},{av:'A8861AparelhoCaracteristicaVlr6',fld:'APARELHOCARACTERISTICAVLR6'},{av:'A8862AparelhoCaracteristicaVlr7',fld:'APARELHOCARACTERISTICAVLR7'},{av:'A8863AparelhoCaracteristicaVlr8',fld:'APARELHOCARACTERISTICAVLR8'},{av:'A8864AparelhoCaracteristicaVlr9',fld:'APARELHOCARACTERISTICAVLR9'},{av:'A9695AparelhoClienteProfissionalEmp',fld:'APARELHOCLIENTEPROFISSIONALEMP'},{av:'A9696AparelhoClienteProfissionalId',fld:'APARELHOCLIENTEPROFISSIONALID'},{av:'A9698AparelhoClienteSNVisitaAgenda',fld:'APARELHOCLIENTESNVISITAAGENDA'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'A8838AparelhoClienteCarac1EmpId',fld:'APARELHOCLIENTECARAC1EMPID'},{av:'A8839AparelhoClienteCarac1Id',fld:'APARELHOCLIENTECARAC1ID'},{av:'A8840AparelhoClienteCarac2EmpId',fld:'APARELHOCLIENTECARAC2EMPID'},{av:'A8841AparelhoClienteCarac2Id',fld:'APARELHOCLIENTECARAC2ID'},{av:'A8842AparelhoClienteCarac3EmpId',fld:'APARELHOCLIENTECARAC3EMPID'},{av:'A8843AparelhoClienteCarac3Id',fld:'APARELHOCLIENTECARAC3ID'},{av:'A8844AparelhoClienteCarac4EmpId',fld:'APARELHOCLIENTECARAC4EMPID'},{av:'A8845AparelhoClienteCarac4Id',fld:'APARELHOCLIENTECARAC4ID'},{av:'A9699AparelhoClienteDataNovaLigacao',fld:'APARELHOCLIENTEDATANOVALIGACAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'A8921AparelhoCaracValorSituacao',fld:'APARELHOCARACVALORSITUACAO'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV160Valor',fld:'vVALOR'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'A9686VisitaClienteDataAgenda',fld:'VISITACLIENTEDATAAGENDA'},{av:'A9681VisitaClienteAparelhoCliSeqId',fld:'VISITACLIENTEAPARELHOCLISEQID'},{av:'A9685VisitaClienteAparelhoId',fld:'VISITACLIENTEAPARELHOID'},{av:'A9683VisitaClientePessoaId',fld:'VISITACLIENTEPESSOAID'},{av:'A9701VisitaClienteDataVisita',fld:'VISITACLIENTEDATAVISITA'},{av:'A9700AparelhoPrazoManutencao',fld:'APARELHOPRAZOMANUTENCAO'},{av:'AV177VisitaClienteDataVisita',fld:'vVISITACLIENTEDATAVISITA'}],[{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV232GXLvl219',fld:'vGXLVL219'},{av:'AV135filtros',fld:'vFILTROS'}]];
   this.EvtParms["'AGENDAR'"] = [[{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'A9686VisitaClienteDataAgenda',fld:'VISITACLIENTEDATAAGENDA'},{av:'A9681VisitaClienteAparelhoCliSeqId',fld:'VISITACLIENTEAPARELHOCLISEQID'},{av:'A9685VisitaClienteAparelhoId',fld:'VISITACLIENTEAPARELHOID'},{av:'A9683VisitaClientePessoaId',fld:'VISITACLIENTEPESSOAID'},{av:'A9701VisitaClienteDataVisita',fld:'VISITACLIENTEDATAVISITA'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A9700AparelhoPrazoManutencao',fld:'APARELHOPRAZOMANUTENCAO'},{av:'AV177VisitaClienteDataVisita',fld:'vVISITACLIENTEDATAVISITA'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV168bmpAg',fld:'vBMPAG'},{av:'gx.fn.getCtrlProperty("vBMPAG","Tooltiptext")',ctrl:'vBMPAG',prop:'Tooltiptext'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV180PRIAparelhoCaracTipo',fld:'vPRIAPARELHOCARACTIPO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV181PRINCIPALAPARELHOCARACID',fld:'vPRINCIPALAPARELHOCARACID'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV74AparelhoCaracEmpresaId',fld:'vAPARELHOCARACEMPRESAID'},{av:'A8834AparelhoCaracValorConteudo',fld:'APARELHOCARACVALORCONTEUDO'},{av:'AV182AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'A8865AparelhoClienteSeqId',fld:'APARELHOCLIENTESEQID'},{av:'A9692AparelhoClientePessoaEmpId',fld:'APARELHOCLIENTEPESSOAEMPID'},{av:'A9691AparelhoClientePessoaId',fld:'APARELHOCLIENTEPESSOAID'},{av:'A9693AparelhoClienteAparelhoEmpId',fld:'APARELHOCLIENTEAPARELHOEMPID'},{av:'A9694AparelhoClienteAparelhoId',fld:'APARELHOCLIENTEAPARELHOID'},{av:'AV184PRIAparelhoCaracOrdenacao',fld:'vPRIAPARELHOCARACORDENACAO'},{av:'A8856AparelhoCaracteristicaVlr1',fld:'APARELHOCARACTERISTICAVLR1'},{av:'A8857AparelhoCaracteristicaVlr2',fld:'APARELHOCARACTERISTICAVLR2'},{av:'A8858AparelhoCaracteristicaVlr3',fld:'APARELHOCARACTERISTICAVLR3'},{av:'A8859AparelhoCaracteristicaVlr4',fld:'APARELHOCARACTERISTICAVLR4'},{av:'A8860AparelhoCaracteristicaVlr5',fld:'APARELHOCARACTERISTICAVLR5'},{av:'A8861AparelhoCaracteristicaVlr6',fld:'APARELHOCARACTERISTICAVLR6'},{av:'A8862AparelhoCaracteristicaVlr7',fld:'APARELHOCARACTERISTICAVLR7'},{av:'A8863AparelhoCaracteristicaVlr8',fld:'APARELHOCARACTERISTICAVLR8'},{av:'A8864AparelhoCaracteristicaVlr9',fld:'APARELHOCARACTERISTICAVLR9'},{av:'A9695AparelhoClienteProfissionalEmp',fld:'APARELHOCLIENTEPROFISSIONALEMP'},{av:'A9696AparelhoClienteProfissionalId',fld:'APARELHOCLIENTEPROFISSIONALID'},{av:'A9698AparelhoClienteSNVisitaAgenda',fld:'APARELHOCLIENTESNVISITAAGENDA'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'A8838AparelhoClienteCarac1EmpId',fld:'APARELHOCLIENTECARAC1EMPID'},{av:'A8839AparelhoClienteCarac1Id',fld:'APARELHOCLIENTECARAC1ID'},{av:'A8840AparelhoClienteCarac2EmpId',fld:'APARELHOCLIENTECARAC2EMPID'},{av:'A8841AparelhoClienteCarac2Id',fld:'APARELHOCLIENTECARAC2ID'},{av:'A8842AparelhoClienteCarac3EmpId',fld:'APARELHOCLIENTECARAC3EMPID'},{av:'A8843AparelhoClienteCarac3Id',fld:'APARELHOCLIENTECARAC3ID'},{av:'A8844AparelhoClienteCarac4EmpId',fld:'APARELHOCLIENTECARAC4EMPID'},{av:'A8845AparelhoClienteCarac4Id',fld:'APARELHOCLIENTECARAC4ID'},{av:'A9699AparelhoClienteDataNovaLigacao',fld:'APARELHOCLIENTEDATANOVALIGACAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'A8921AparelhoCaracValorSituacao',fld:'APARELHOCARACVALORSITUACAO'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV160Valor',fld:'vVALOR'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'gx.fn.getCtrlProperty("vBMPAG","Enabled")',ctrl:'vBMPAG',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPAG","Visible")',ctrl:'vBMPAG',prop:'Visible'},{ctrl:'CTLAPARELHOCLIENTEDATANOVALIGACAO',prop:'Visible'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'AV177VisitaClienteDataVisita',fld:'vVISITACLIENTEDATAVISITA'},{av:'AV178AparelhoPrazoManutencao',fld:'vAPARELHOPRAZOMANUTENCAO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV168bmpAg',fld:'vBMPAG'},{av:'gx.fn.getCtrlProperty("vBMPAG","Tooltiptext")',ctrl:'vBMPAG',prop:'Tooltiptext'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV180PRIAparelhoCaracTipo',fld:'vPRIAPARELHOCARACTIPO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV181PRINCIPALAPARELHOCARACID',fld:'vPRINCIPALAPARELHOCARACID'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV74AparelhoCaracEmpresaId',fld:'vAPARELHOCARACEMPRESAID'},{av:'A8834AparelhoCaracValorConteudo',fld:'APARELHOCARACVALORCONTEUDO'},{av:'AV182AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'A8865AparelhoClienteSeqId',fld:'APARELHOCLIENTESEQID'},{av:'A9692AparelhoClientePessoaEmpId',fld:'APARELHOCLIENTEPESSOAEMPID'},{av:'A9691AparelhoClientePessoaId',fld:'APARELHOCLIENTEPESSOAID'},{av:'A9693AparelhoClienteAparelhoEmpId',fld:'APARELHOCLIENTEAPARELHOEMPID'},{av:'A9694AparelhoClienteAparelhoId',fld:'APARELHOCLIENTEAPARELHOID'},{av:'AV184PRIAparelhoCaracOrdenacao',fld:'vPRIAPARELHOCARACORDENACAO'},{av:'A8856AparelhoCaracteristicaVlr1',fld:'APARELHOCARACTERISTICAVLR1'},{av:'A8857AparelhoCaracteristicaVlr2',fld:'APARELHOCARACTERISTICAVLR2'},{av:'A8858AparelhoCaracteristicaVlr3',fld:'APARELHOCARACTERISTICAVLR3'},{av:'A8859AparelhoCaracteristicaVlr4',fld:'APARELHOCARACTERISTICAVLR4'},{av:'A8860AparelhoCaracteristicaVlr5',fld:'APARELHOCARACTERISTICAVLR5'},{av:'A8861AparelhoCaracteristicaVlr6',fld:'APARELHOCARACTERISTICAVLR6'},{av:'A8862AparelhoCaracteristicaVlr7',fld:'APARELHOCARACTERISTICAVLR7'},{av:'A8863AparelhoCaracteristicaVlr8',fld:'APARELHOCARACTERISTICAVLR8'},{av:'A8864AparelhoCaracteristicaVlr9',fld:'APARELHOCARACTERISTICAVLR9'},{av:'A9695AparelhoClienteProfissionalEmp',fld:'APARELHOCLIENTEPROFISSIONALEMP'},{av:'A9696AparelhoClienteProfissionalId',fld:'APARELHOCLIENTEPROFISSIONALID'},{av:'A9698AparelhoClienteSNVisitaAgenda',fld:'APARELHOCLIENTESNVISITAAGENDA'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'A8838AparelhoClienteCarac1EmpId',fld:'APARELHOCLIENTECARAC1EMPID'},{av:'A8839AparelhoClienteCarac1Id',fld:'APARELHOCLIENTECARAC1ID'},{av:'A8840AparelhoClienteCarac2EmpId',fld:'APARELHOCLIENTECARAC2EMPID'},{av:'A8841AparelhoClienteCarac2Id',fld:'APARELHOCLIENTECARAC2ID'},{av:'A8842AparelhoClienteCarac3EmpId',fld:'APARELHOCLIENTECARAC3EMPID'},{av:'A8843AparelhoClienteCarac3Id',fld:'APARELHOCLIENTECARAC3ID'},{av:'A8844AparelhoClienteCarac4EmpId',fld:'APARELHOCLIENTECARAC4EMPID'},{av:'A8845AparelhoClienteCarac4Id',fld:'APARELHOCLIENTECARAC4ID'},{av:'A9699AparelhoClienteDataNovaLigacao',fld:'APARELHOCLIENTEDATANOVALIGACAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'A8921AparelhoCaracValorSituacao',fld:'APARELHOCARACVALORSITUACAO'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV160Valor',fld:'vVALOR'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'A9686VisitaClienteDataAgenda',fld:'VISITACLIENTEDATAAGENDA'},{av:'A9681VisitaClienteAparelhoCliSeqId',fld:'VISITACLIENTEAPARELHOCLISEQID'},{av:'A9685VisitaClienteAparelhoId',fld:'VISITACLIENTEAPARELHOID'},{av:'A9683VisitaClientePessoaId',fld:'VISITACLIENTEPESSOAID'},{av:'A9701VisitaClienteDataVisita',fld:'VISITACLIENTEDATAVISITA'},{av:'A9700AparelhoPrazoManutencao',fld:'APARELHOPRAZOMANUTENCAO'},{av:'AV177VisitaClienteDataVisita',fld:'vVISITACLIENTEDATAVISITA'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV175i',fld:'vI'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV168bmpAg',fld:'vBMPAG'},{av:'gx.fn.getCtrlProperty("vBMPAG","Tooltiptext")',ctrl:'vBMPAG',prop:'Tooltiptext'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV180PRIAparelhoCaracTipo',fld:'vPRIAPARELHOCARACTIPO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV181PRINCIPALAPARELHOCARACID',fld:'vPRINCIPALAPARELHOCARACID'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV74AparelhoCaracEmpresaId',fld:'vAPARELHOCARACEMPRESAID'},{av:'A8834AparelhoCaracValorConteudo',fld:'APARELHOCARACVALORCONTEUDO'},{av:'AV182AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'A8865AparelhoClienteSeqId',fld:'APARELHOCLIENTESEQID'},{av:'A9692AparelhoClientePessoaEmpId',fld:'APARELHOCLIENTEPESSOAEMPID'},{av:'A9691AparelhoClientePessoaId',fld:'APARELHOCLIENTEPESSOAID'},{av:'A9693AparelhoClienteAparelhoEmpId',fld:'APARELHOCLIENTEAPARELHOEMPID'},{av:'A9694AparelhoClienteAparelhoId',fld:'APARELHOCLIENTEAPARELHOID'},{av:'AV184PRIAparelhoCaracOrdenacao',fld:'vPRIAPARELHOCARACORDENACAO'},{av:'A8856AparelhoCaracteristicaVlr1',fld:'APARELHOCARACTERISTICAVLR1'},{av:'A8857AparelhoCaracteristicaVlr2',fld:'APARELHOCARACTERISTICAVLR2'},{av:'A8858AparelhoCaracteristicaVlr3',fld:'APARELHOCARACTERISTICAVLR3'},{av:'A8859AparelhoCaracteristicaVlr4',fld:'APARELHOCARACTERISTICAVLR4'},{av:'A8860AparelhoCaracteristicaVlr5',fld:'APARELHOCARACTERISTICAVLR5'},{av:'A8861AparelhoCaracteristicaVlr6',fld:'APARELHOCARACTERISTICAVLR6'},{av:'A8862AparelhoCaracteristicaVlr7',fld:'APARELHOCARACTERISTICAVLR7'},{av:'A8863AparelhoCaracteristicaVlr8',fld:'APARELHOCARACTERISTICAVLR8'},{av:'A8864AparelhoCaracteristicaVlr9',fld:'APARELHOCARACTERISTICAVLR9'},{av:'A9695AparelhoClienteProfissionalEmp',fld:'APARELHOCLIENTEPROFISSIONALEMP'},{av:'A9696AparelhoClienteProfissionalId',fld:'APARELHOCLIENTEPROFISSIONALID'},{av:'A9698AparelhoClienteSNVisitaAgenda',fld:'APARELHOCLIENTESNVISITAAGENDA'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'A8838AparelhoClienteCarac1EmpId',fld:'APARELHOCLIENTECARAC1EMPID'},{av:'A8839AparelhoClienteCarac1Id',fld:'APARELHOCLIENTECARAC1ID'},{av:'A8840AparelhoClienteCarac2EmpId',fld:'APARELHOCLIENTECARAC2EMPID'},{av:'A8841AparelhoClienteCarac2Id',fld:'APARELHOCLIENTECARAC2ID'},{av:'A8842AparelhoClienteCarac3EmpId',fld:'APARELHOCLIENTECARAC3EMPID'},{av:'A8843AparelhoClienteCarac3Id',fld:'APARELHOCLIENTECARAC3ID'},{av:'A8844AparelhoClienteCarac4EmpId',fld:'APARELHOCLIENTECARAC4EMPID'},{av:'A8845AparelhoClienteCarac4Id',fld:'APARELHOCLIENTECARAC4ID'},{av:'A9699AparelhoClienteDataNovaLigacao',fld:'APARELHOCLIENTEDATANOVALIGACAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'A8921AparelhoCaracValorSituacao',fld:'APARELHOCARACVALORSITUACAO'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV160Valor',fld:'vVALOR'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'A9686VisitaClienteDataAgenda',fld:'VISITACLIENTEDATAAGENDA'},{av:'A9681VisitaClienteAparelhoCliSeqId',fld:'VISITACLIENTEAPARELHOCLISEQID'},{av:'A9685VisitaClienteAparelhoId',fld:'VISITACLIENTEAPARELHOID'},{av:'A9683VisitaClientePessoaId',fld:'VISITACLIENTEPESSOAID'},{av:'A9701VisitaClienteDataVisita',fld:'VISITACLIENTEDATAVISITA'},{av:'A9700AparelhoPrazoManutencao',fld:'APARELHOPRAZOMANUTENCAO'},{av:'AV177VisitaClienteDataVisita',fld:'vVISITACLIENTEDATAVISITA'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV168bmpAg',fld:'vBMPAG'},{av:'gx.fn.getCtrlProperty("vBMPAG","Tooltiptext")',ctrl:'vBMPAG',prop:'Tooltiptext'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV180PRIAparelhoCaracTipo',fld:'vPRIAPARELHOCARACTIPO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV181PRINCIPALAPARELHOCARACID',fld:'vPRINCIPALAPARELHOCARACID'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV74AparelhoCaracEmpresaId',fld:'vAPARELHOCARACEMPRESAID'},{av:'A8834AparelhoCaracValorConteudo',fld:'APARELHOCARACVALORCONTEUDO'},{av:'AV182AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'A8865AparelhoClienteSeqId',fld:'APARELHOCLIENTESEQID'},{av:'A9692AparelhoClientePessoaEmpId',fld:'APARELHOCLIENTEPESSOAEMPID'},{av:'A9691AparelhoClientePessoaId',fld:'APARELHOCLIENTEPESSOAID'},{av:'A9693AparelhoClienteAparelhoEmpId',fld:'APARELHOCLIENTEAPARELHOEMPID'},{av:'A9694AparelhoClienteAparelhoId',fld:'APARELHOCLIENTEAPARELHOID'},{av:'AV184PRIAparelhoCaracOrdenacao',fld:'vPRIAPARELHOCARACORDENACAO'},{av:'A8856AparelhoCaracteristicaVlr1',fld:'APARELHOCARACTERISTICAVLR1'},{av:'A8857AparelhoCaracteristicaVlr2',fld:'APARELHOCARACTERISTICAVLR2'},{av:'A8858AparelhoCaracteristicaVlr3',fld:'APARELHOCARACTERISTICAVLR3'},{av:'A8859AparelhoCaracteristicaVlr4',fld:'APARELHOCARACTERISTICAVLR4'},{av:'A8860AparelhoCaracteristicaVlr5',fld:'APARELHOCARACTERISTICAVLR5'},{av:'A8861AparelhoCaracteristicaVlr6',fld:'APARELHOCARACTERISTICAVLR6'},{av:'A8862AparelhoCaracteristicaVlr7',fld:'APARELHOCARACTERISTICAVLR7'},{av:'A8863AparelhoCaracteristicaVlr8',fld:'APARELHOCARACTERISTICAVLR8'},{av:'A8864AparelhoCaracteristicaVlr9',fld:'APARELHOCARACTERISTICAVLR9'},{av:'A9695AparelhoClienteProfissionalEmp',fld:'APARELHOCLIENTEPROFISSIONALEMP'},{av:'A9696AparelhoClienteProfissionalId',fld:'APARELHOCLIENTEPROFISSIONALID'},{av:'A9698AparelhoClienteSNVisitaAgenda',fld:'APARELHOCLIENTESNVISITAAGENDA'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'A8838AparelhoClienteCarac1EmpId',fld:'APARELHOCLIENTECARAC1EMPID'},{av:'A8839AparelhoClienteCarac1Id',fld:'APARELHOCLIENTECARAC1ID'},{av:'A8840AparelhoClienteCarac2EmpId',fld:'APARELHOCLIENTECARAC2EMPID'},{av:'A8841AparelhoClienteCarac2Id',fld:'APARELHOCLIENTECARAC2ID'},{av:'A8842AparelhoClienteCarac3EmpId',fld:'APARELHOCLIENTECARAC3EMPID'},{av:'A8843AparelhoClienteCarac3Id',fld:'APARELHOCLIENTECARAC3ID'},{av:'A8844AparelhoClienteCarac4EmpId',fld:'APARELHOCLIENTECARAC4EMPID'},{av:'A8845AparelhoClienteCarac4Id',fld:'APARELHOCLIENTECARAC4ID'},{av:'A9699AparelhoClienteDataNovaLigacao',fld:'APARELHOCLIENTEDATANOVALIGACAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'A8921AparelhoCaracValorSituacao',fld:'APARELHOCARACVALORSITUACAO'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV160Valor',fld:'vVALOR'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'A9686VisitaClienteDataAgenda',fld:'VISITACLIENTEDATAAGENDA'},{av:'A9681VisitaClienteAparelhoCliSeqId',fld:'VISITACLIENTEAPARELHOCLISEQID'},{av:'A9685VisitaClienteAparelhoId',fld:'VISITACLIENTEAPARELHOID'},{av:'A9683VisitaClientePessoaId',fld:'VISITACLIENTEPESSOAID'},{av:'A9701VisitaClienteDataVisita',fld:'VISITACLIENTEDATAVISITA'},{av:'A9700AparelhoPrazoManutencao',fld:'APARELHOPRAZOMANUTENCAO'},{av:'AV177VisitaClienteDataVisita',fld:'vVISITACLIENTEDATAVISITA'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV168bmpAg',fld:'vBMPAG'},{av:'gx.fn.getCtrlProperty("vBMPAG","Tooltiptext")',ctrl:'vBMPAG',prop:'Tooltiptext'},{av:'AV223Pgmname',fld:'vPGMNAME',hsh:true},{av:'AV71PessoaId',fld:'vPESSOAID'},{av:'AV67AparelhoId',fld:'vAPARELHOID'},{av:'A8824AparelhoEmpresaId',fld:'APARELHOEMPRESAID'},{av:'AV68AparelhoEmpresaId',fld:'vAPARELHOEMPRESAID'},{av:'A8825AparelhoId',fld:'APARELHOID'},{av:'A8821AparelhoDescricao',fld:'APARELHODESCRICAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV70PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV123SNConsisteTela',fld:'vSNCONSISTETELA'},{av:'AV180PRIAparelhoCaracTipo',fld:'vPRIAPARELHOCARACTIPO'},{av:'A8832AparelhoCaracId',fld:'APARELHOCARACID'},{av:'AV181PRINCIPALAPARELHOCARACID',fld:'vPRINCIPALAPARELHOCARACID'},{av:'A8833AparelhoCaracEmpresaId',fld:'APARELHOCARACEMPRESAID'},{av:'AV74AparelhoCaracEmpresaId',fld:'vAPARELHOCARACEMPRESAID'},{av:'A8834AparelhoCaracValorConteudo',fld:'APARELHOCARACVALORCONTEUDO'},{av:'AV182AparelhoCaracValorConteudo',fld:'vAPARELHOCARACVALORCONTEUDO'},{av:'A8837AparelhoCaracValorId',fld:'APARELHOCARACVALORID'},{av:'AV183ListaValorCarac',fld:'vLISTAVALORCARAC'},{av:'A8865AparelhoClienteSeqId',fld:'APARELHOCLIENTESEQID'},{av:'A9692AparelhoClientePessoaEmpId',fld:'APARELHOCLIENTEPESSOAEMPID'},{av:'A9691AparelhoClientePessoaId',fld:'APARELHOCLIENTEPESSOAID'},{av:'A9693AparelhoClienteAparelhoEmpId',fld:'APARELHOCLIENTEAPARELHOEMPID'},{av:'A9694AparelhoClienteAparelhoId',fld:'APARELHOCLIENTEAPARELHOID'},{av:'AV184PRIAparelhoCaracOrdenacao',fld:'vPRIAPARELHOCARACORDENACAO'},{av:'A8856AparelhoCaracteristicaVlr1',fld:'APARELHOCARACTERISTICAVLR1'},{av:'A8857AparelhoCaracteristicaVlr2',fld:'APARELHOCARACTERISTICAVLR2'},{av:'A8858AparelhoCaracteristicaVlr3',fld:'APARELHOCARACTERISTICAVLR3'},{av:'A8859AparelhoCaracteristicaVlr4',fld:'APARELHOCARACTERISTICAVLR4'},{av:'A8860AparelhoCaracteristicaVlr5',fld:'APARELHOCARACTERISTICAVLR5'},{av:'A8861AparelhoCaracteristicaVlr6',fld:'APARELHOCARACTERISTICAVLR6'},{av:'A8862AparelhoCaracteristicaVlr7',fld:'APARELHOCARACTERISTICAVLR7'},{av:'A8863AparelhoCaracteristicaVlr8',fld:'APARELHOCARACTERISTICAVLR8'},{av:'A8864AparelhoCaracteristicaVlr9',fld:'APARELHOCARACTERISTICAVLR9'},{av:'A9695AparelhoClienteProfissionalEmp',fld:'APARELHOCLIENTEPROFISSIONALEMP'},{av:'A9696AparelhoClienteProfissionalId',fld:'APARELHOCLIENTEPROFISSIONALID'},{av:'A9698AparelhoClienteSNVisitaAgenda',fld:'APARELHOCLIENTESNVISITAAGENDA'},{av:'AV122AparelhoGridDescricao',fld:'vAPARELHOGRIDDESCRICAO'},{av:'A8838AparelhoClienteCarac1EmpId',fld:'APARELHOCLIENTECARAC1EMPID'},{av:'A8839AparelhoClienteCarac1Id',fld:'APARELHOCLIENTECARAC1ID'},{av:'A8840AparelhoClienteCarac2EmpId',fld:'APARELHOCLIENTECARAC2EMPID'},{av:'A8841AparelhoClienteCarac2Id',fld:'APARELHOCLIENTECARAC2ID'},{av:'A8842AparelhoClienteCarac3EmpId',fld:'APARELHOCLIENTECARAC3EMPID'},{av:'A8843AparelhoClienteCarac3Id',fld:'APARELHOCLIENTECARAC3ID'},{av:'A8844AparelhoClienteCarac4EmpId',fld:'APARELHOCLIENTECARAC4EMPID'},{av:'A8845AparelhoClienteCarac4Id',fld:'APARELHOCLIENTECARAC4ID'},{av:'A9699AparelhoClienteDataNovaLigacao',fld:'APARELHOCLIENTEDATANOVALIGACAO'},{av:'AV161ValorConteudo',fld:'vVALORCONTEUDO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV127ContLinhas',fld:'vCONTLINHAS'},{av:'AV174AparelhoIdAux',fld:'vAPARELHOIDAUX'},{av:'A8921AparelhoCaracValorSituacao',fld:'APARELHOCARACVALORSITUACAO'},{av:'AV159AparelhoCaracId',fld:'vAPARELHOCARACID'},{av:'A8827AparelhoCaracTipo',fld:'APARELHOCARACTIPO'},{av:'AV160Valor',fld:'vVALOR'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV121SdtAparelhoCliente',fld:'vSDTAPARELHOCLIENTE',grid:60},{av:'A9686VisitaClienteDataAgenda',fld:'VISITACLIENTEDATAAGENDA'},{av:'A9681VisitaClienteAparelhoCliSeqId',fld:'VISITACLIENTEAPARELHOCLISEQID'},{av:'A9685VisitaClienteAparelhoId',fld:'VISITACLIENTEAPARELHOID'},{av:'A9683VisitaClientePessoaId',fld:'VISITACLIENTEPESSOAID'},{av:'A9701VisitaClienteDataVisita',fld:'VISITACLIENTEDATAVISITA'},{av:'A9700AparelhoPrazoManutencao',fld:'APARELHOPRAZOMANUTENCAO'},{av:'AV177VisitaClienteDataVisita',fld:'vVISITACLIENTEDATAVISITA'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'}]];
   this.setPrompt("PROMPT_PESSOAID", [16]);
   this.setVCMap("AV223Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A8824AparelhoEmpresaId", "APARELHOEMPRESAID", 0, "char");
   this.setVCMap("A8825AparelhoId", "APARELHOID", 0, "int");
   this.setVCMap("A8821AparelhoDescricao", "APARELHODESCRICAO", 0, "svchar");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A8832AparelhoCaracId", "APARELHOCARACID", 0, "int");
   this.setVCMap("A8833AparelhoCaracEmpresaId", "APARELHOCARACEMPRESAID", 0, "char");
   this.setVCMap("AV74AparelhoCaracEmpresaId", "vAPARELHOCARACEMPRESAID", 0, "char");
   this.setVCMap("A8834AparelhoCaracValorConteudo", "APARELHOCARACVALORCONTEUDO", 0, "svchar");
   this.setVCMap("A8837AparelhoCaracValorId", "APARELHOCARACVALORID", 0, "int");
   this.setVCMap("AV183ListaValorCarac", "vLISTAVALORCARAC", 0, "Collsvchar");
   this.setVCMap("A8865AparelhoClienteSeqId", "APARELHOCLIENTESEQID", 0, "int");
   this.setVCMap("A9692AparelhoClientePessoaEmpId", "APARELHOCLIENTEPESSOAEMPID", 0, "char");
   this.setVCMap("A9691AparelhoClientePessoaId", "APARELHOCLIENTEPESSOAID", 0, "int");
   this.setVCMap("A9693AparelhoClienteAparelhoEmpId", "APARELHOCLIENTEAPARELHOEMPID", 0, "char");
   this.setVCMap("A9694AparelhoClienteAparelhoId", "APARELHOCLIENTEAPARELHOID", 0, "int");
   this.setVCMap("A8856AparelhoCaracteristicaVlr1", "APARELHOCARACTERISTICAVLR1", 0, "svchar");
   this.setVCMap("A8857AparelhoCaracteristicaVlr2", "APARELHOCARACTERISTICAVLR2", 0, "svchar");
   this.setVCMap("A8858AparelhoCaracteristicaVlr3", "APARELHOCARACTERISTICAVLR3", 0, "svchar");
   this.setVCMap("A8859AparelhoCaracteristicaVlr4", "APARELHOCARACTERISTICAVLR4", 0, "svchar");
   this.setVCMap("A8860AparelhoCaracteristicaVlr5", "APARELHOCARACTERISTICAVLR5", 0, "svchar");
   this.setVCMap("A8861AparelhoCaracteristicaVlr6", "APARELHOCARACTERISTICAVLR6", 0, "svchar");
   this.setVCMap("A8862AparelhoCaracteristicaVlr7", "APARELHOCARACTERISTICAVLR7", 0, "svchar");
   this.setVCMap("A8863AparelhoCaracteristicaVlr8", "APARELHOCARACTERISTICAVLR8", 0, "svchar");
   this.setVCMap("A8864AparelhoCaracteristicaVlr9", "APARELHOCARACTERISTICAVLR9", 0, "svchar");
   this.setVCMap("A9695AparelhoClienteProfissionalEmp", "APARELHOCLIENTEPROFISSIONALEMP", 0, "char");
   this.setVCMap("A9696AparelhoClienteProfissionalId", "APARELHOCLIENTEPROFISSIONALID", 0, "int");
   this.setVCMap("A9698AparelhoClienteSNVisitaAgenda", "APARELHOCLIENTESNVISITAAGENDA", 0, "char");
   this.setVCMap("AV122AparelhoGridDescricao", "vAPARELHOGRIDDESCRICAO", 0, "svchar");
   this.setVCMap("A8838AparelhoClienteCarac1EmpId", "APARELHOCLIENTECARAC1EMPID", 0, "char");
   this.setVCMap("A8839AparelhoClienteCarac1Id", "APARELHOCLIENTECARAC1ID", 0, "int");
   this.setVCMap("A8840AparelhoClienteCarac2EmpId", "APARELHOCLIENTECARAC2EMPID", 0, "char");
   this.setVCMap("A8841AparelhoClienteCarac2Id", "APARELHOCLIENTECARAC2ID", 0, "int");
   this.setVCMap("A8842AparelhoClienteCarac3EmpId", "APARELHOCLIENTECARAC3EMPID", 0, "char");
   this.setVCMap("A8843AparelhoClienteCarac3Id", "APARELHOCLIENTECARAC3ID", 0, "int");
   this.setVCMap("A8844AparelhoClienteCarac4EmpId", "APARELHOCLIENTECARAC4EMPID", 0, "char");
   this.setVCMap("A8845AparelhoClienteCarac4Id", "APARELHOCLIENTECARAC4ID", 0, "int");
   this.setVCMap("A9699AparelhoClienteDataNovaLigacao", "APARELHOCLIENTEDATANOVALIGACAO", 0, "dtime");
   this.setVCMap("AV161ValorConteudo", "vVALORCONTEUDO", 0, "svchar");
   this.setVCMap("A445PessoaCliente", "PESSOACLIENTE", 0, "char");
   this.setVCMap("AV127ContLinhas", "vCONTLINHAS", 0, "int");
   this.setVCMap("AV174AparelhoIdAux", "vAPARELHOIDAUX", 0, "int");
   this.setVCMap("A8921AparelhoCaracValorSituacao", "APARELHOCARACVALORSITUACAO", 0, "char");
   this.setVCMap("AV159AparelhoCaracId", "vAPARELHOCARACID", 0, "int");
   this.setVCMap("A8827AparelhoCaracTipo", "APARELHOCARACTIPO", 0, "int");
   this.setVCMap("AV160Valor", "vVALOR", 0, "svchar");
   this.setVCMap("AV121SdtAparelhoCliente", "vSDTAPARELHOCLIENTE", 0, "CollSdtAparelhoCliente.SdtAparelhoClienteItem");
   this.setVCMap("A9686VisitaClienteDataAgenda", "VISITACLIENTEDATAAGENDA", 0, "date");
   this.setVCMap("A9681VisitaClienteAparelhoCliSeqId", "VISITACLIENTEAPARELHOCLISEQID", 0, "int");
   this.setVCMap("A9685VisitaClienteAparelhoId", "VISITACLIENTEAPARELHOID", 0, "int");
   this.setVCMap("A9683VisitaClientePessoaId", "VISITACLIENTEPESSOAID", 0, "int");
   this.setVCMap("A9701VisitaClienteDataVisita", "VISITACLIENTEDATAVISITA", 0, "date");
   this.setVCMap("A9700AparelhoPrazoManutencao", "APARELHOPRAZOMANUTENCAO", 0, "int");
   this.setVCMap("AV177VisitaClienteDataVisita", "vVISITACLIENTEDATAVISITA", 0, "date");
   this.setVCMap("AV223Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A8824AparelhoEmpresaId", "APARELHOEMPRESAID", 0, "char");
   this.setVCMap("A8825AparelhoId", "APARELHOID", 0, "int");
   this.setVCMap("A8821AparelhoDescricao", "APARELHODESCRICAO", 0, "svchar");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A8832AparelhoCaracId", "APARELHOCARACID", 0, "int");
   this.setVCMap("A8833AparelhoCaracEmpresaId", "APARELHOCARACEMPRESAID", 0, "char");
   this.setVCMap("AV74AparelhoCaracEmpresaId", "vAPARELHOCARACEMPRESAID", 0, "char");
   this.setVCMap("A8834AparelhoCaracValorConteudo", "APARELHOCARACVALORCONTEUDO", 0, "svchar");
   this.setVCMap("A8837AparelhoCaracValorId", "APARELHOCARACVALORID", 0, "int");
   this.setVCMap("AV183ListaValorCarac", "vLISTAVALORCARAC", 0, "Collsvchar");
   this.setVCMap("A8865AparelhoClienteSeqId", "APARELHOCLIENTESEQID", 0, "int");
   this.setVCMap("A9692AparelhoClientePessoaEmpId", "APARELHOCLIENTEPESSOAEMPID", 0, "char");
   this.setVCMap("A9691AparelhoClientePessoaId", "APARELHOCLIENTEPESSOAID", 0, "int");
   this.setVCMap("A9693AparelhoClienteAparelhoEmpId", "APARELHOCLIENTEAPARELHOEMPID", 0, "char");
   this.setVCMap("A9694AparelhoClienteAparelhoId", "APARELHOCLIENTEAPARELHOID", 0, "int");
   this.setVCMap("A8856AparelhoCaracteristicaVlr1", "APARELHOCARACTERISTICAVLR1", 0, "svchar");
   this.setVCMap("A8857AparelhoCaracteristicaVlr2", "APARELHOCARACTERISTICAVLR2", 0, "svchar");
   this.setVCMap("A8858AparelhoCaracteristicaVlr3", "APARELHOCARACTERISTICAVLR3", 0, "svchar");
   this.setVCMap("A8859AparelhoCaracteristicaVlr4", "APARELHOCARACTERISTICAVLR4", 0, "svchar");
   this.setVCMap("A8860AparelhoCaracteristicaVlr5", "APARELHOCARACTERISTICAVLR5", 0, "svchar");
   this.setVCMap("A8861AparelhoCaracteristicaVlr6", "APARELHOCARACTERISTICAVLR6", 0, "svchar");
   this.setVCMap("A8862AparelhoCaracteristicaVlr7", "APARELHOCARACTERISTICAVLR7", 0, "svchar");
   this.setVCMap("A8863AparelhoCaracteristicaVlr8", "APARELHOCARACTERISTICAVLR8", 0, "svchar");
   this.setVCMap("A8864AparelhoCaracteristicaVlr9", "APARELHOCARACTERISTICAVLR9", 0, "svchar");
   this.setVCMap("A9695AparelhoClienteProfissionalEmp", "APARELHOCLIENTEPROFISSIONALEMP", 0, "char");
   this.setVCMap("A9696AparelhoClienteProfissionalId", "APARELHOCLIENTEPROFISSIONALID", 0, "int");
   this.setVCMap("A9698AparelhoClienteSNVisitaAgenda", "APARELHOCLIENTESNVISITAAGENDA", 0, "char");
   this.setVCMap("AV122AparelhoGridDescricao", "vAPARELHOGRIDDESCRICAO", 0, "svchar");
   this.setVCMap("A8838AparelhoClienteCarac1EmpId", "APARELHOCLIENTECARAC1EMPID", 0, "char");
   this.setVCMap("A8839AparelhoClienteCarac1Id", "APARELHOCLIENTECARAC1ID", 0, "int");
   this.setVCMap("A8840AparelhoClienteCarac2EmpId", "APARELHOCLIENTECARAC2EMPID", 0, "char");
   this.setVCMap("A8841AparelhoClienteCarac2Id", "APARELHOCLIENTECARAC2ID", 0, "int");
   this.setVCMap("A8842AparelhoClienteCarac3EmpId", "APARELHOCLIENTECARAC3EMPID", 0, "char");
   this.setVCMap("A8843AparelhoClienteCarac3Id", "APARELHOCLIENTECARAC3ID", 0, "int");
   this.setVCMap("A8844AparelhoClienteCarac4EmpId", "APARELHOCLIENTECARAC4EMPID", 0, "char");
   this.setVCMap("A8845AparelhoClienteCarac4Id", "APARELHOCLIENTECARAC4ID", 0, "int");
   this.setVCMap("A9699AparelhoClienteDataNovaLigacao", "APARELHOCLIENTEDATANOVALIGACAO", 0, "dtime");
   this.setVCMap("AV161ValorConteudo", "vVALORCONTEUDO", 0, "svchar");
   this.setVCMap("A445PessoaCliente", "PESSOACLIENTE", 0, "char");
   this.setVCMap("AV127ContLinhas", "vCONTLINHAS", 0, "int");
   this.setVCMap("AV174AparelhoIdAux", "vAPARELHOIDAUX", 0, "int");
   this.setVCMap("A8921AparelhoCaracValorSituacao", "APARELHOCARACVALORSITUACAO", 0, "char");
   this.setVCMap("AV159AparelhoCaracId", "vAPARELHOCARACID", 0, "int");
   this.setVCMap("A8827AparelhoCaracTipo", "APARELHOCARACTIPO", 0, "int");
   this.setVCMap("AV160Valor", "vVALOR", 0, "svchar");
   this.setVCMap("AV121SdtAparelhoCliente", "vSDTAPARELHOCLIENTE", 0, "CollSdtAparelhoCliente.SdtAparelhoClienteItem");
   this.setVCMap("A9686VisitaClienteDataAgenda", "VISITACLIENTEDATAAGENDA", 0, "date");
   this.setVCMap("A9681VisitaClienteAparelhoCliSeqId", "VISITACLIENTEAPARELHOCLISEQID", 0, "int");
   this.setVCMap("A9685VisitaClienteAparelhoId", "VISITACLIENTEAPARELHOID", 0, "int");
   this.setVCMap("A9683VisitaClientePessoaId", "VISITACLIENTEPESSOAID", 0, "int");
   this.setVCMap("A9701VisitaClienteDataVisita", "VISITACLIENTEDATAVISITA", 0, "date");
   this.setVCMap("A9700AparelhoPrazoManutencao", "APARELHOPRAZOMANUTENCAO", 0, "int");
   this.setVCMap("AV177VisitaClienteDataVisita", "vVISITACLIENTEDATAVISITA", 0, "date");
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV168bmpAg", rfrProp:"Value", gxAttId:"Bmpag"});
   GridContainer.addRefreshingVar({rfrVar:"AV168bmpAg", rfrProp:"Tooltiptext", gxAttId:"Bmpag"});
   GridContainer.addRefreshingVar({rfrVar:"AV223Pgmname"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar({rfrVar:"A8824AparelhoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[129]);
   GridContainer.addRefreshingVar({rfrVar:"A8825AparelhoId"});
   GridContainer.addRefreshingVar({rfrVar:"A8821AparelhoDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[128]);
   GridContainer.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   GridContainer.addRefreshingVar(this.GXValidFnc[130]);
   GridContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridContainer.addRefreshingVar({rfrVar:"A8832AparelhoCaracId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[125]);
   GridContainer.addRefreshingVar({rfrVar:"A8833AparelhoCaracEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV74AparelhoCaracEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A8834AparelhoCaracValorConteudo"});
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar({rfrVar:"A8837AparelhoCaracValorId"});
   GridContainer.addRefreshingVar({rfrVar:"AV183ListaValorCarac"});
   GridContainer.addRefreshingVar({rfrVar:"A8865AparelhoClienteSeqId"});
   GridContainer.addRefreshingVar({rfrVar:"A9692AparelhoClientePessoaEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A9691AparelhoClientePessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A9693AparelhoClienteAparelhoEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A9694AparelhoClienteAparelhoId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[120]);
   GridContainer.addRefreshingVar({rfrVar:"A8856AparelhoCaracteristicaVlr1"});
   GridContainer.addRefreshingVar({rfrVar:"A8857AparelhoCaracteristicaVlr2"});
   GridContainer.addRefreshingVar({rfrVar:"A8858AparelhoCaracteristicaVlr3"});
   GridContainer.addRefreshingVar({rfrVar:"A8859AparelhoCaracteristicaVlr4"});
   GridContainer.addRefreshingVar({rfrVar:"A8860AparelhoCaracteristicaVlr5"});
   GridContainer.addRefreshingVar({rfrVar:"A8861AparelhoCaracteristicaVlr6"});
   GridContainer.addRefreshingVar({rfrVar:"A8862AparelhoCaracteristicaVlr7"});
   GridContainer.addRefreshingVar({rfrVar:"A8863AparelhoCaracteristicaVlr8"});
   GridContainer.addRefreshingVar({rfrVar:"A8864AparelhoCaracteristicaVlr9"});
   GridContainer.addRefreshingVar({rfrVar:"A9695AparelhoClienteProfissionalEmp"});
   GridContainer.addRefreshingVar({rfrVar:"A9696AparelhoClienteProfissionalId"});
   GridContainer.addRefreshingVar({rfrVar:"A9698AparelhoClienteSNVisitaAgenda"});
   GridContainer.addRefreshingVar({rfrVar:"AV122AparelhoGridDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A8838AparelhoClienteCarac1EmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A8839AparelhoClienteCarac1Id"});
   GridContainer.addRefreshingVar({rfrVar:"A8840AparelhoClienteCarac2EmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A8841AparelhoClienteCarac2Id"});
   GridContainer.addRefreshingVar({rfrVar:"A8842AparelhoClienteCarac3EmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A8843AparelhoClienteCarac3Id"});
   GridContainer.addRefreshingVar({rfrVar:"A8844AparelhoClienteCarac4EmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A8845AparelhoClienteCarac4Id"});
   GridContainer.addRefreshingVar({rfrVar:"A9699AparelhoClienteDataNovaLigacao"});
   GridContainer.addRefreshingVar({rfrVar:"AV161ValorConteudo"});
   GridContainer.addRefreshingVar({rfrVar:"A445PessoaCliente"});
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV127ContLinhas"});
   GridContainer.addRefreshingVar({rfrVar:"AV174AparelhoIdAux"});
   GridContainer.addRefreshingVar({rfrVar:"A8921AparelhoCaracValorSituacao"});
   GridContainer.addRefreshingVar({rfrVar:"AV159AparelhoCaracId"});
   GridContainer.addRefreshingVar({rfrVar:"A8827AparelhoCaracTipo"});
   GridContainer.addRefreshingVar({rfrVar:"AV160Valor"});
   GridContainer.addRefreshingVar(this.GXValidFnc[131]);
   GridContainer.addRefreshingVar({rfrVar:"AV121SdtAparelhoCliente"});
   GridContainer.addRefreshingVar({rfrVar:"A9686VisitaClienteDataAgenda"});
   GridContainer.addRefreshingVar({rfrVar:"A9681VisitaClienteAparelhoCliSeqId"});
   GridContainer.addRefreshingVar({rfrVar:"A9685VisitaClienteAparelhoId"});
   GridContainer.addRefreshingVar({rfrVar:"A9683VisitaClientePessoaId"});
   GridContainer.addRefreshingVar({rfrVar:"A9701VisitaClienteDataVisita"});
   GridContainer.addRefreshingVar({rfrVar:"A9700AparelhoPrazoManutencao"});
   GridContainer.addRefreshingVar({rfrVar:"AV177VisitaClienteDataVisita"});
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteAparelhoId"], this.GXValidFnc[61], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoDescricao"], this.GXValidFnc[62], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoCaracteristicaVlr1"], this.GXValidFnc[63], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoCaracteristicaVlr2"], this.GXValidFnc[64], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoCaracteristicaVlr3"], this.GXValidFnc[65], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoCaracteristicaVlr4"], this.GXValidFnc[66], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteDataNovaLigacao"], this.GXValidFnc[67], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteSeqId"], this.GXValidFnc[68], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClientePessoaEmpId"], this.GXValidFnc[69], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClientePessoaId"], this.GXValidFnc[70], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteAparelhoEmpId"], this.GXValidFnc[71], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac1EmpId"], this.GXValidFnc[72], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac1Id"], this.GXValidFnc[73], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac2EmpId"], this.GXValidFnc[74], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac2Id"], this.GXValidFnc[75], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac3EmpId"], this.GXValidFnc[76], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac3Id"], this.GXValidFnc[77], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac4EmpId"], this.GXValidFnc[78], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac4Id"], this.GXValidFnc[79], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac5EmpId"], this.GXValidFnc[80], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac5Id"], this.GXValidFnc[81], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac6EmpId"], this.GXValidFnc[82], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac6Id"], this.GXValidFnc[83], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac7EmpId"], this.GXValidFnc[84], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac7Id"], this.GXValidFnc[85], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac8EmpId"], this.GXValidFnc[86], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac8Id"], this.GXValidFnc[87], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac9EmpId"], this.GXValidFnc[88], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoClienteCarac9Id"], this.GXValidFnc[89], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoCaracteristicaVlr5"], this.GXValidFnc[90], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoCaracteristicaVlr6"], this.GXValidFnc[91], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoCaracteristicaVlr7"], this.GXValidFnc[92], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoCaracteristicaVlr8"], this.GXValidFnc[93], "AV121SdtAparelhoCliente");
   this.addGridBCProperty("Sdtaparelhocliente", ["AparelhoCaracteristicaVlr9"], this.GXValidFnc[94], "AV121SdtAparelhoCliente");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaequipamentocliente());
