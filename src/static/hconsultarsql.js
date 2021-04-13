/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:56:35.31
*/
gx.evt.autoSkip = false;
gx.define('hconsultarsql', false, function () {
   this.ServerClass =  "hconsultarsql" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_PREVIOUS'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12ConteudoCampo=gx.fn.getControlValue("vCONTEUDOCAMPO") ;
      this.AV88Resultado=gx.fn.getControlValue("vRESULTADO") ;
      this.AV57SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV100Modo=gx.fn.getControlValue("vMODO") ;
      this.AV93jdbcUrl=gx.fn.getControlValue("vJDBCURL") ;
      this.AV94user=gx.fn.getControlValue("vUSER") ;
      this.AV95pass=gx.fn.getControlValue("vPASS") ;
      this.AV96JdbcDriver=gx.fn.getControlValue("vJDBCDRIVER") ;
      this.AV92LibPath=gx.fn.getControlValue("vLIBPATH") ;
      this.AV54SdtSql=gx.fn.getControlValue("vSDTSQL") ;
   };
   this.s192_client=function()
   {
      this.AV67SQLAux =  gx.text.lower( this.AV63Txt)  ;
      if ( gx.text.indexOf( this.AV67SQLAux, "update ", 1) > 0 )
      {
         this.addMessage("Comando \"Update\" inválido");
         this.AV57SnErro =  "S"  ;
      }
      else
      {
         if ( gx.text.indexOf( this.AV67SQLAux, "delete ", 1) > 0 )
         {
            this.addMessage("Comando \"Delete\" inválido");
            this.AV57SnErro =  "S"  ;
         }
         else
         {
            if ( gx.text.indexOf( this.AV67SQLAux, "insert ", 1) > 0 )
            {
               this.addMessage("Comando \"Insert\" inválido");
               this.AV57SnErro =  "S"  ;
            }
         }
      }
      if ( gx.text.indexOf( this.AV67SQLAux, "drop ", 1) > 0 && this.AV57SnErro == "N" )
      {
         this.addMessage("Comando \"Drop\" inválido");
         this.AV57SnErro =  "S"  ;
      }
      if ( gx.text.indexOf( this.AV67SQLAux, "select ", 1) == 0 && this.AV57SnErro == "N" )
      {
         this.addMessage("Sql inválido.");
         this.AV57SnErro =  "S"  ;
      }
      if ( gx.text.indexOf( this.AV67SQLAux, "create ", 1) > 0 && this.AV57SnErro == "N" )
      {
         this.addMessage("Sql inválido.");
         this.AV57SnErro =  "S"  ;
      }
      if ( gx.text.indexOf( this.AV67SQLAux, "alter ", 1) > 0 && this.AV57SnErro == "N" )
      {
         this.addMessage("Sql inválido.");
         this.AV57SnErro =  "S"  ;
      }
      if ( gx.text.indexOf( this.AV67SQLAux, "truncate ", 1) > 0 && this.AV57SnErro == "N" )
      {
         this.addMessage("Sql inválido.");
         this.AV57SnErro =  "S"  ;
      }
   };
   this.s202_client=function()
   {
      this.AV55Select =  ""  ;
      this.AV20FromJoinWhere =  ""  ;
      this.AV21GroupOrder =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV59tamanho = gx.num.trunc( 0 ,0) ;
      this.AV61TamanhoAux = gx.num.trunc( 1 ,0) ;
      if ( gx.text.indexOf( this.AV20FromJoinWhere, "/", 1) > 0 )
      {
         this.AV42QtdEntrada =  gx.util.regExp.split(this.AV20FromJoinWhere, ":")  ;
         this.AV37NumEntrada = gx.num.trunc( this.AV42QtdEntrada.length - 1 ,0) ;
         this.AV39Qtd = gx.num.trunc( 1 ,0) ;
         while ( this.AV39Qtd <= this.AV37NumEntrada )
         {
            this.AV53SdtCamposItem =  {NomeCampo:"",TipoCampo:"",IdCampo:0,NmCampo:""}  ;
            this.AV59tamanho = gx.num.trunc( ( gx.text.indexOf( this.AV20FromJoinWhere, gx.text.trim( ":"), this.AV61TamanhoAux) ) + 2 ,0) ;
            this.AV61TamanhoAux = gx.num.trunc( ( gx.text.indexOf( this.AV20FromJoinWhere, gx.text.trim( "/"), this.AV59tamanho) ) + 1 ,0) ;
            this.AV53SdtCamposItem.NmCampo =  gx.text.trim( gx.text.substring( this.AV20FromJoinWhere, this.AV59tamanho, this.AV61TamanhoAux-this.AV59tamanho-1))  ;
            this.AV59tamanho = gx.num.trunc( ( gx.text.indexOf( this.AV20FromJoinWhere, gx.text.trim( "/"), this.AV61TamanhoAux-1) ) + 1 ,0) ;
            this.AV53SdtCamposItem.TipoCampo =  gx.text.trim( gx.text.substring( this.AV20FromJoinWhere, this.AV59tamanho, 1))  ;
            this.AV59tamanho = gx.num.trunc( ( gx.text.indexOf( this.AV20FromJoinWhere, gx.text.trim( "["), this.AV61TamanhoAux) ) + 1 ,0) ;
            this.AV61TamanhoAux = gx.num.trunc( ( gx.text.indexOf( this.AV20FromJoinWhere, gx.text.trim( "]"), this.AV59tamanho) ) + 1 ,0) ;
            this.AV53SdtCamposItem.NomeCampo =  gx.text.trim( gx.text.substring( this.AV20FromJoinWhere, this.AV59tamanho, this.AV61TamanhoAux-this.AV59tamanho-1))  ;
            this.AV53SdtCamposItem.IdCampo = gx.num.trunc( this.AV39Qtd ,0) ;
            this.AV52SdtCampos.push(this.AV53SdtCamposItem) ;
            this.AV39Qtd = gx.num.trunc( this.AV39Qtd + 1 ,0) ;
         }
      }
   };
   this.s212_client=function()
   {
      this.AV59tamanho = gx.num.trunc( ( gx.text.indexOf( this.AV20FromJoinWhere, ":", 1) ) ,0) ;
      this.AV61TamanhoAux = gx.num.trunc( ( ( gx.text.indexOf( this.AV20FromJoinWhere, "]", this.AV59tamanho) ) - this.AV59tamanho ) + 1 ,0) ;
      this.AV12ConteudoCampo =  gx.text.trim( gx.text.substring( this.AV20FromJoinWhere, this.AV59tamanho, this.AV61TamanhoAux))  ;
   };
   this.e2120c1_client=function()
   {
      this.clearMessages();
      if ( (""==this.AV62TpConsultas) )
      {
         gx.fn.setCtrlProperty("BUTTON4","Caption", "Gravar SQL" );
      }
      else
      {
         gx.fn.setCtrlProperty("BUTTON4","Caption", "Alterar SQL" );
      }
      this.refreshOutputs([{ctrl:'BUTTON4',prop:'Caption'}]);
   };
   this.e1120c2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1420c2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1520c2_client=function()
   {
      this.executeServerEvent("'ALTERASQL'", false, null, false, false);
   };
   this.e1220c2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1320c2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1620c2_client=function()
   {
      this.executeServerEvent("'VERSQL'", true, null, false, false);
   };
   this.e2220c2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,16,26,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,82,83,90,91,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,111];
   this.GXLastCtrlId =111;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",27,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultarsql",[],false,1,false,true,0,true,false,false,"CollSdtSql.SdtSqlItem",0,"px","Novo registro",true,false,false,null,null,false,"AV54SdtSql",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV10S",28,"CTLNUMLINHA","","","NumLinha","int",0,"px",10,10,"right",null,[],"GXV10S","GXV10S",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10T",29,"CTLVIEWBANCOCAMPO01","","","ViewBancoCampo01","svchar",0,"px",255,80,"left",null,[],"GXV10T","GXV10T",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10U",30,"CTLVIEWBANCOCAMPO02","","","ViewBancoCampo02","svchar",0,"px",255,80,"left",null,[],"GXV10U","GXV10U",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10V",31,"CTLVIEWBANCOCAMPO03","","","ViewBancoCampo03","svchar",0,"px",255,80,"left",null,[],"GXV10V","GXV10V",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10W",32,"CTLVIEWBANCOCAMPO04","","","ViewBancoCampo04","svchar",0,"px",255,80,"left",null,[],"GXV10W","GXV10W",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10X",33,"CTLVIEWBANCOCAMPO05","","","ViewBancoCampo05","svchar",0,"px",255,80,"left",null,[],"GXV10X","GXV10X",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10Y",34,"CTLVIEWBANCOCAMPO06","","","ViewBancoCampo06","svchar",0,"px",255,80,"left",null,[],"GXV10Y","GXV10Y",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10Z",35,"CTLVIEWBANCOCAMPO07","","","ViewBancoCampo07","svchar",0,"px",255,80,"left",null,[],"GXV10Z","GXV10Z",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV110",36,"CTLVIEWBANCOCAMPO08","","","ViewBancoCampo08","svchar",0,"px",255,80,"left",null,[],"GXV110","GXV110",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV111",37,"CTLVIEWBANCOCAMPO09","","","ViewBancoCampo09","svchar",0,"px",255,80,"left",null,[],"GXV111","GXV111",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV112",38,"CTLVIEWBANCOCAMPO10","","","ViewBancoCampo10","svchar",0,"px",255,80,"left",null,[],"GXV112","GXV112",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV113",39,"CTLVIEWBANCOCAMPO11","","","ViewBancoCampo11","svchar",0,"px",255,80,"left",null,[],"GXV113","GXV113",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV114",40,"CTLVIEWBANCOCAMPO12","","","ViewBancoCampo12","svchar",0,"px",255,80,"left",null,[],"GXV114","GXV114",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV115",41,"CTLVIEWBANCOCAMPO13","","","ViewBancoCampo13","svchar",0,"px",255,80,"left",null,[],"GXV115","GXV115",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV116",42,"CTLVIEWBANCOCAMPO14","","","ViewBancoCampo14","svchar",0,"px",255,80,"left",null,[],"GXV116","GXV116",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV117",43,"CTLVIEWBANCOCAMPO15","","","ViewBancoCampo15","svchar",0,"px",255,80,"left",null,[],"GXV117","GXV117",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV118",44,"CTLVIEWBANCOCAMPO16","","","ViewBancoCampo16","svchar",0,"px",255,80,"left",null,[],"GXV118","GXV118",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV119",45,"CTLVIEWBANCOCAMPO17","","","ViewBancoCampo17","svchar",0,"px",255,80,"left",null,[],"GXV119","GXV119",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11A",46,"CTLVIEWBANCOCAMPO18","","","ViewBancoCampo18","svchar",0,"px",255,80,"left",null,[],"GXV11A","GXV11A",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11B",47,"CTLVIEWBANCOCAMPO19","","","ViewBancoCampo19","svchar",0,"px",255,80,"left",null,[],"GXV11B","GXV11B",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11C",48,"CTLVIEWBANCOCAMPO20","","","ViewBancoCampo20","svchar",0,"px",255,80,"left",null,[],"GXV11C","GXV11C",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11D",49,"CTLVIEWBANCOCAMPO21","","","ViewBancoCampo21","svchar",0,"px",255,80,"left",null,[],"GXV11D","GXV11D",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11E",50,"CTLVIEWBANCOCAMPO22","","","ViewBancoCampo22","svchar",0,"px",255,80,"left",null,[],"GXV11E","GXV11E",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11F",51,"CTLVIEWBANCOCAMPO23","","","ViewBancoCampo23","svchar",0,"px",255,80,"left",null,[],"GXV11F","GXV11F",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11G",52,"CTLVIEWBANCOCAMPO24","","","ViewBancoCampo24","svchar",0,"px",255,80,"left",null,[],"GXV11G","GXV11G",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11H",53,"CTLVIEWBANCOCAMPO25","","","ViewBancoCampo25","svchar",0,"px",255,80,"left",null,[],"GXV11H","GXV11H",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11I",54,"CTLVIEWBANCOCAMPO26","","","ViewBancoCampo26","svchar",0,"px",255,80,"left",null,[],"GXV11I","GXV11I",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11J",55,"CTLVIEWBANCOCAMPO27","","","ViewBancoCampo27","svchar",0,"px",255,80,"left",null,[],"GXV11J","GXV11J",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11K",56,"CTLVIEWBANCOCAMPO28","","","ViewBancoCampo28","svchar",0,"px",255,80,"left",null,[],"GXV11K","GXV11K",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11L",57,"CTLVIEWBANCOCAMPO29","","","ViewBancoCampo29","svchar",0,"px",255,80,"left",null,[],"GXV11L","GXV11L",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11M",58,"CTLVIEWBANCOCAMPO30","","","ViewBancoCampo30","svchar",0,"px",255,80,"left",null,[],"GXV11M","GXV11M",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11N",59,"CTLVIEWBANCOCAMPO31","","","ViewBancoCampo31","svchar",0,"px",255,80,"left",null,[],"GXV11N","GXV11N",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11O",60,"CTLVIEWBANCOCAMPO32","","","ViewBancoCampo32","svchar",0,"px",255,80,"left",null,[],"GXV11O","GXV11O",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11P",61,"CTLVIEWBANCOCAMPO33","","","ViewBancoCampo33","svchar",0,"px",255,80,"left",null,[],"GXV11P","GXV11P",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11Q",62,"CTLVIEWBANCOCAMPO34","","","ViewBancoCampo34","svchar",0,"px",255,80,"left",null,[],"GXV11Q","GXV11Q",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11R",63,"CTLVIEWBANCOCAMPO35","","","ViewBancoCampo35","svchar",0,"px",255,80,"left",null,[],"GXV11R","GXV11R",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11S",64,"CTLVIEWBANCOCAMPO36","","","ViewBancoCampo36","svchar",0,"px",255,80,"left",null,[],"GXV11S","GXV11S",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11T",65,"CTLVIEWBANCOCAMPO37","","","ViewBancoCampo37","svchar",0,"px",255,80,"left",null,[],"GXV11T","GXV11T",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11U",66,"CTLVIEWBANCOCAMPO38","","","ViewBancoCampo38","svchar",0,"px",255,80,"left",null,[],"GXV11U","GXV11U",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11V",67,"CTLVIEWBANCOCAMPO39","","","ViewBancoCampo39","svchar",0,"px",255,80,"left",null,[],"GXV11V","GXV11V",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11W",68,"CTLVIEWBANCOCAMPO40","","","ViewBancoCampo40","svchar",0,"px",255,80,"left",null,[],"GXV11W","GXV11W",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11X",69,"CTLVIEWBANCOCAMPO41","","","ViewBancoCampo41","svchar",0,"px",255,80,"left",null,[],"GXV11X","GXV11X",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11Y",70,"CTLVIEWBANCOCAMPO42","","","ViewBancoCampo42","svchar",0,"px",255,80,"left",null,[],"GXV11Y","GXV11Y",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV11Z",71,"CTLVIEWBANCOCAMPO43","","","ViewBancoCampo43","svchar",0,"px",255,80,"left",null,[],"GXV11Z","GXV11Z",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV120",72,"CTLVIEWBANCOCAMPO44","","","ViewBancoCampo44","svchar",0,"px",255,80,"left",null,[],"GXV120","GXV120",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV121",73,"CTLVIEWBANCOCAMPO45","","","ViewBancoCampo45","svchar",0,"px",255,80,"left",null,[],"GXV121","GXV121",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV122",74,"CTLVIEWBANCOCAMPO46","","","ViewBancoCampo46","svchar",0,"px",255,80,"left",null,[],"GXV122","GXV122",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV123",75,"CTLVIEWBANCOCAMPO47","","","ViewBancoCampo47","svchar",0,"px",255,80,"left",null,[],"GXV123","GXV123",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV124",76,"CTLVIEWBANCOCAMPO48","","","ViewBancoCampo48","svchar",0,"px",255,80,"left",null,[],"GXV124","GXV124",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV125",77,"CTLVIEWBANCOCAMPO49","","","ViewBancoCampo49","svchar",0,"px",255,80,"left",null,[],"GXV125","GXV125",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV126",78,"CTLVIEWBANCOCAMPO50","","","ViewBancoCampo50","svchar",0,"px",255,80,"left",null,[],"GXV126","GXV126",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE3",grid:0};
   GXValidFnc[9]={fld:"TABLE4",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:'e2120c1_client',rgrid:[],fld:"vTPCONSULTAS",gxz:"ZV62TpConsultas",gxold:"OV62TpConsultas",gxvar:"AV62TpConsultas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV62TpConsultas=Value},v2z:function(Value){gx.O.ZV62TpConsultas=Value},v2c:function(){gx.fn.setComboBoxValue("vTPCONSULTAS",gx.O.AV62TpConsultas)},c2v:function(){gx.O.AV62TpConsultas=this.val()},val:function(){return gx.fn.getControlValue("vTPCONSULTAS")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TABLE1",grid:0};
   GXValidFnc[26]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[28]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMLINHA",gxz:"ZV105GXV10S",gxold:"OV105GXV10S",gxvar:"GXV10S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10S=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV105GXV10S=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMLINHA",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10S,0)},c2v:function(){gx.O.GXV10S=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMLINHA",row || gx.fn.currentGridRowImpl(27),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO01",gxz:"ZV106GXV10T",gxold:"OV106GXV10T",gxvar:"GXV10T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10T=Value},v2z:function(Value){gx.O.ZV106GXV10T=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO01",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10T,0)},c2v:function(){gx.O.GXV10T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO01",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO02",gxz:"ZV107GXV10U",gxold:"OV107GXV10U",gxvar:"GXV10U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10U=Value},v2z:function(Value){gx.O.ZV107GXV10U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO02",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10U,0)},c2v:function(){gx.O.GXV10U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO02",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO03",gxz:"ZV108GXV10V",gxold:"OV108GXV10V",gxvar:"GXV10V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10V=Value},v2z:function(Value){gx.O.ZV108GXV10V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO03",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10V,0)},c2v:function(){gx.O.GXV10V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO03",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO04",gxz:"ZV109GXV10W",gxold:"OV109GXV10W",gxvar:"GXV10W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10W=Value},v2z:function(Value){gx.O.ZV109GXV10W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO04",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10W,0)},c2v:function(){gx.O.GXV10W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO04",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO05",gxz:"ZV110GXV10X",gxold:"OV110GXV10X",gxvar:"GXV10X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10X=Value},v2z:function(Value){gx.O.ZV110GXV10X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO05",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10X,0)},c2v:function(){gx.O.GXV10X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO05",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO06",gxz:"ZV111GXV10Y",gxold:"OV111GXV10Y",gxvar:"GXV10Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Y=Value},v2z:function(Value){gx.O.ZV111GXV10Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO06",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10Y,0)},c2v:function(){gx.O.GXV10Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO06",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO07",gxz:"ZV112GXV10Z",gxold:"OV112GXV10Z",gxvar:"GXV10Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Z=Value},v2z:function(Value){gx.O.ZV112GXV10Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO07",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10Z,0)},c2v:function(){gx.O.GXV10Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO07",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO08",gxz:"ZV113GXV110",gxold:"OV113GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV110=Value},v2z:function(Value){gx.O.ZV113GXV110=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO08",row || gx.fn.currentGridRowImpl(27),gx.O.GXV110,0)},c2v:function(){gx.O.GXV110=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO08",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO09",gxz:"ZV114GXV111",gxold:"OV114GXV111",gxvar:"GXV111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV111=Value},v2z:function(Value){gx.O.ZV114GXV111=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO09",row || gx.fn.currentGridRowImpl(27),gx.O.GXV111,0)},c2v:function(){gx.O.GXV111=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO09",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO10",gxz:"ZV115GXV112",gxold:"OV115GXV112",gxvar:"GXV112",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV112=Value},v2z:function(Value){gx.O.ZV115GXV112=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO10",row || gx.fn.currentGridRowImpl(27),gx.O.GXV112,0)},c2v:function(){gx.O.GXV112=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO10",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO11",gxz:"ZV116GXV113",gxold:"OV116GXV113",gxvar:"GXV113",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV113=Value},v2z:function(Value){gx.O.ZV116GXV113=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO11",row || gx.fn.currentGridRowImpl(27),gx.O.GXV113,0)},c2v:function(){gx.O.GXV113=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO11",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO12",gxz:"ZV117GXV114",gxold:"OV117GXV114",gxvar:"GXV114",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV114=Value},v2z:function(Value){gx.O.ZV117GXV114=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO12",row || gx.fn.currentGridRowImpl(27),gx.O.GXV114,0)},c2v:function(){gx.O.GXV114=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO12",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO13",gxz:"ZV118GXV115",gxold:"OV118GXV115",gxvar:"GXV115",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV115=Value},v2z:function(Value){gx.O.ZV118GXV115=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO13",row || gx.fn.currentGridRowImpl(27),gx.O.GXV115,0)},c2v:function(){gx.O.GXV115=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO13",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO14",gxz:"ZV119GXV116",gxold:"OV119GXV116",gxvar:"GXV116",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV116=Value},v2z:function(Value){gx.O.ZV119GXV116=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO14",row || gx.fn.currentGridRowImpl(27),gx.O.GXV116,0)},c2v:function(){gx.O.GXV116=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO14",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO15",gxz:"ZV120GXV117",gxold:"OV120GXV117",gxvar:"GXV117",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV117=Value},v2z:function(Value){gx.O.ZV120GXV117=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO15",row || gx.fn.currentGridRowImpl(27),gx.O.GXV117,0)},c2v:function(){gx.O.GXV117=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO15",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO16",gxz:"ZV121GXV118",gxold:"OV121GXV118",gxvar:"GXV118",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV118=Value},v2z:function(Value){gx.O.ZV121GXV118=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO16",row || gx.fn.currentGridRowImpl(27),gx.O.GXV118,0)},c2v:function(){gx.O.GXV118=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO16",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO17",gxz:"ZV122GXV119",gxold:"OV122GXV119",gxvar:"GXV119",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV119=Value},v2z:function(Value){gx.O.ZV122GXV119=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO17",row || gx.fn.currentGridRowImpl(27),gx.O.GXV119,0)},c2v:function(){gx.O.GXV119=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO17",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO18",gxz:"ZV123GXV11A",gxold:"OV123GXV11A",gxvar:"GXV11A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11A=Value},v2z:function(Value){gx.O.ZV123GXV11A=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO18",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11A,0)},c2v:function(){gx.O.GXV11A=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO18",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO19",gxz:"ZV124GXV11B",gxold:"OV124GXV11B",gxvar:"GXV11B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11B=Value},v2z:function(Value){gx.O.ZV124GXV11B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO19",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11B,0)},c2v:function(){gx.O.GXV11B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO19",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO20",gxz:"ZV125GXV11C",gxold:"OV125GXV11C",gxvar:"GXV11C",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11C=Value},v2z:function(Value){gx.O.ZV125GXV11C=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO20",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11C,0)},c2v:function(){gx.O.GXV11C=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO20",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO21",gxz:"ZV126GXV11D",gxold:"OV126GXV11D",gxvar:"GXV11D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11D=Value},v2z:function(Value){gx.O.ZV126GXV11D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO21",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11D,0)},c2v:function(){gx.O.GXV11D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO21",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO22",gxz:"ZV127GXV11E",gxold:"OV127GXV11E",gxvar:"GXV11E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11E=Value},v2z:function(Value){gx.O.ZV127GXV11E=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO22",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11E,0)},c2v:function(){gx.O.GXV11E=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO22",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO23",gxz:"ZV128GXV11F",gxold:"OV128GXV11F",gxvar:"GXV11F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11F=Value},v2z:function(Value){gx.O.ZV128GXV11F=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO23",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11F,0)},c2v:function(){gx.O.GXV11F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO23",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO24",gxz:"ZV129GXV11G",gxold:"OV129GXV11G",gxvar:"GXV11G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11G=Value},v2z:function(Value){gx.O.ZV129GXV11G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO24",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11G,0)},c2v:function(){gx.O.GXV11G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO24",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO25",gxz:"ZV130GXV11H",gxold:"OV130GXV11H",gxvar:"GXV11H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11H=Value},v2z:function(Value){gx.O.ZV130GXV11H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO25",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11H,0)},c2v:function(){gx.O.GXV11H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO25",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO26",gxz:"ZV131GXV11I",gxold:"OV131GXV11I",gxvar:"GXV11I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11I=Value},v2z:function(Value){gx.O.ZV131GXV11I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO26",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11I,0)},c2v:function(){gx.O.GXV11I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO26",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO27",gxz:"ZV132GXV11J",gxold:"OV132GXV11J",gxvar:"GXV11J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11J=Value},v2z:function(Value){gx.O.ZV132GXV11J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO27",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11J,0)},c2v:function(){gx.O.GXV11J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO27",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO28",gxz:"ZV133GXV11K",gxold:"OV133GXV11K",gxvar:"GXV11K",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11K=Value},v2z:function(Value){gx.O.ZV133GXV11K=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO28",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11K,0)},c2v:function(){gx.O.GXV11K=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO28",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO29",gxz:"ZV134GXV11L",gxold:"OV134GXV11L",gxvar:"GXV11L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11L=Value},v2z:function(Value){gx.O.ZV134GXV11L=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO29",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11L,0)},c2v:function(){gx.O.GXV11L=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO29",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO30",gxz:"ZV135GXV11M",gxold:"OV135GXV11M",gxvar:"GXV11M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11M=Value},v2z:function(Value){gx.O.ZV135GXV11M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO30",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11M,0)},c2v:function(){gx.O.GXV11M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO30",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO31",gxz:"ZV136GXV11N",gxold:"OV136GXV11N",gxvar:"GXV11N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11N=Value},v2z:function(Value){gx.O.ZV136GXV11N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO31",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11N,0)},c2v:function(){gx.O.GXV11N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO31",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO32",gxz:"ZV137GXV11O",gxold:"OV137GXV11O",gxvar:"GXV11O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11O=Value},v2z:function(Value){gx.O.ZV137GXV11O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO32",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11O,0)},c2v:function(){gx.O.GXV11O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO32",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO33",gxz:"ZV138GXV11P",gxold:"OV138GXV11P",gxvar:"GXV11P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11P=Value},v2z:function(Value){gx.O.ZV138GXV11P=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO33",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11P,0)},c2v:function(){gx.O.GXV11P=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO33",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO34",gxz:"ZV139GXV11Q",gxold:"OV139GXV11Q",gxvar:"GXV11Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Q=Value},v2z:function(Value){gx.O.ZV139GXV11Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO34",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11Q,0)},c2v:function(){gx.O.GXV11Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO34",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO35",gxz:"ZV140GXV11R",gxold:"OV140GXV11R",gxvar:"GXV11R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11R=Value},v2z:function(Value){gx.O.ZV140GXV11R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO35",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11R,0)},c2v:function(){gx.O.GXV11R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO35",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO36",gxz:"ZV141GXV11S",gxold:"OV141GXV11S",gxvar:"GXV11S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11S=Value},v2z:function(Value){gx.O.ZV141GXV11S=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO36",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11S,0)},c2v:function(){gx.O.GXV11S=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO36",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO37",gxz:"ZV142GXV11T",gxold:"OV142GXV11T",gxvar:"GXV11T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11T=Value},v2z:function(Value){gx.O.ZV142GXV11T=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO37",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11T,0)},c2v:function(){gx.O.GXV11T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO37",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO38",gxz:"ZV143GXV11U",gxold:"OV143GXV11U",gxvar:"GXV11U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11U=Value},v2z:function(Value){gx.O.ZV143GXV11U=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO38",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11U,0)},c2v:function(){gx.O.GXV11U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO38",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO39",gxz:"ZV144GXV11V",gxold:"OV144GXV11V",gxvar:"GXV11V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11V=Value},v2z:function(Value){gx.O.ZV144GXV11V=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO39",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11V,0)},c2v:function(){gx.O.GXV11V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO39",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO40",gxz:"ZV145GXV11W",gxold:"OV145GXV11W",gxvar:"GXV11W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11W=Value},v2z:function(Value){gx.O.ZV145GXV11W=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO40",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11W,0)},c2v:function(){gx.O.GXV11W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO40",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO41",gxz:"ZV146GXV11X",gxold:"OV146GXV11X",gxvar:"GXV11X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11X=Value},v2z:function(Value){gx.O.ZV146GXV11X=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO41",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11X,0)},c2v:function(){gx.O.GXV11X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO41",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO42",gxz:"ZV147GXV11Y",gxold:"OV147GXV11Y",gxvar:"GXV11Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Y=Value},v2z:function(Value){gx.O.ZV147GXV11Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO42",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11Y,0)},c2v:function(){gx.O.GXV11Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO42",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO43",gxz:"ZV148GXV11Z",gxold:"OV148GXV11Z",gxvar:"GXV11Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Z=Value},v2z:function(Value){gx.O.ZV148GXV11Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO43",row || gx.fn.currentGridRowImpl(27),gx.O.GXV11Z,0)},c2v:function(){gx.O.GXV11Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO43",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO44",gxz:"ZV149GXV120",gxold:"OV149GXV120",gxvar:"GXV120",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV120=Value},v2z:function(Value){gx.O.ZV149GXV120=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO44",row || gx.fn.currentGridRowImpl(27),gx.O.GXV120,0)},c2v:function(){gx.O.GXV120=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO44",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO45",gxz:"ZV150GXV121",gxold:"OV150GXV121",gxvar:"GXV121",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV121=Value},v2z:function(Value){gx.O.ZV150GXV121=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO45",row || gx.fn.currentGridRowImpl(27),gx.O.GXV121,0)},c2v:function(){gx.O.GXV121=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO45",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO46",gxz:"ZV151GXV122",gxold:"OV151GXV122",gxvar:"GXV122",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV122=Value},v2z:function(Value){gx.O.ZV151GXV122=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO46",row || gx.fn.currentGridRowImpl(27),gx.O.GXV122,0)},c2v:function(){gx.O.GXV122=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO46",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO47",gxz:"ZV152GXV123",gxold:"OV152GXV123",gxvar:"GXV123",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV123=Value},v2z:function(Value){gx.O.ZV152GXV123=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO47",row || gx.fn.currentGridRowImpl(27),gx.O.GXV123,0)},c2v:function(){gx.O.GXV123=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO47",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO48",gxz:"ZV153GXV124",gxold:"OV153GXV124",gxvar:"GXV124",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV124=Value},v2z:function(Value){gx.O.ZV153GXV124=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO48",row || gx.fn.currentGridRowImpl(27),gx.O.GXV124,0)},c2v:function(){gx.O.GXV124=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO48",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO49",gxz:"ZV154GXV125",gxold:"OV154GXV125",gxvar:"GXV125",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV125=Value},v2z:function(Value){gx.O.ZV154GXV125=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO49",row || gx.fn.currentGridRowImpl(27),gx.O.GXV125,0)},c2v:function(){gx.O.GXV125=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO49",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"svchar",len:255,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLVIEWBANCOCAMPO50",gxz:"ZV155GXV126",gxold:"OV155GXV126",gxvar:"GXV126",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV126=Value},v2z:function(Value){gx.O.ZV155GXV126=Value},v2c:function(row){gx.fn.setGridControlValue("CTLVIEWBANCOCAMPO50",row || gx.fn.currentGridRowImpl(27),gx.O.GXV126,0)},c2v:function(){gx.O.GXV126=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLVIEWBANCOCAMPO50",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[79]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[82]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[83]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[90]={fld:"GERARCSV",grid:0};
   GXValidFnc[91]={fld:"VERSQL",grid:0};
   GXValidFnc[93]={fld:"JS", format:2,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCLA",gxz:"ZV16EmpresaPadraoCla",gxold:"OV16EmpresaPadraoCla",gxvar:"AV16EmpresaPadraoCla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EmpresaPadraoCla=Value},v2z:function(Value){gx.O.ZV16EmpresaPadraoCla=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCLA",gx.O.AV16EmpresaPadraoCla,0)},c2v:function(){gx.O.AV16EmpresaPadraoCla=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCLA")},nac:gx.falseFn};
   GXValidFnc[95]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMCAMPOS",gxz:"ZV36NumCampos",gxold:"OV36NumCampos",gxvar:"AV36NumCampos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36NumCampos=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36NumCampos=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMCAMPOS",gx.O.AV36NumCampos,0)},c2v:function(){gx.O.AV36NumCampos=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMCAMPOS",'.')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDX",gxz:"ZV23Idx",gxold:"OV23Idx",gxvar:"AV23Idx",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Idx=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Idx=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vIDX",gx.O.AV23Idx,0)},c2v:function(){gx.O.AV23Idx=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIDX",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDTOTALPAGGRID",gxz:"ZV44QtdTotalPagGrid",gxold:"OV44QtdTotalPagGrid",gxvar:"AV44QtdTotalPagGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44QtdTotalPagGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44QtdTotalPagGrid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDTOTALPAGGRID",gx.O.AV44QtdTotalPagGrid,0)},c2v:function(){gx.O.AV44QtdTotalPagGrid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDTOTALPAGGRID",'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV38Pagina",gxold:"OV38Pagina",gxvar:"AV38Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV38Pagina,0)},c2v:function(){gx.O.AV38Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vIDX1",gxz:"ZV24Idx1",gxold:"OV24Idx1",gxvar:"AV24Idx1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24Idx1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Idx1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vIDX1",gx.O.AV24Idx1,0)},c2v:function(){gx.O.AV24Idx1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIDX1",'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDREGISTROS",gxz:"ZV43QtdRegistros",gxold:"OV43QtdRegistros",gxvar:"AV43QtdRegistros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43QtdRegistros=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43QtdRegistros=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDREGISTROS",gx.O.AV43QtdRegistros,0)},c2v:function(){gx.O.AV43QtdRegistros=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDREGISTROS",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEFILE",gxz:"ZV34NomeFile",gxold:"OV34NomeFile",gxvar:"AV34NomeFile",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34NomeFile=Value},v2z:function(Value){gx.O.ZV34NomeFile=Value},v2c:function(){gx.fn.setControlValue("vNOMEFILE",gx.O.AV34NomeFile,0)},c2v:function(){gx.O.AV34NomeFile=this.val()},val:function(){return gx.fn.getControlValue("vNOMEFILE")},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPESQUISAR",gxz:"ZV66SNPesquisar",gxold:"OV66SNPesquisar",gxvar:"AV66SNPesquisar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66SNPesquisar=Value},v2z:function(Value){gx.O.ZV66SNPesquisar=Value},v2c:function(){gx.fn.setControlValue("vSNPESQUISAR",gx.O.AV66SNPesquisar,0)},c2v:function(){gx.O.AV66SNPesquisar=this.val()},val:function(){return gx.fn.getControlValue("vSNPESQUISAR")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNOK",gxz:"ZV68SnOk",gxold:"OV68SnOk",gxvar:"AV68SnOk",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68SnOk=Value},v2z:function(Value){gx.O.ZV68SnOk=Value},v2c:function(){gx.fn.setControlValue("vSNOK",gx.O.AV68SnOk,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV68SnOk=this.val()},val:function(){return gx.fn.getControlValue("vSNOK")},nac:gx.falseFn};
   this.declareDomainHdlr( 103 , function() {
   });
   GXValidFnc[104]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTAMANHOFROM",gxz:"ZV76tamanhoFrom",gxold:"OV76tamanhoFrom",gxvar:"AV76tamanhoFrom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76tamanhoFrom=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV76tamanhoFrom=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTAMANHOFROM",gx.O.AV76tamanhoFrom,0)},c2v:function(){gx.O.AV76tamanhoFrom=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTAMANHOFROM",'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV83PaginaAux",gxold:"OV83PaginaAux",gxvar:"AV83PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV83PaginaAux,0)},c2v:function(){gx.O.AV83PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVLROFFSET",gxz:"ZV85VlrOffSet",gxold:"OV85VlrOffSet",gxvar:"AV85VlrOffSet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85VlrOffSet=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85VlrOffSet=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVLROFFSET",gx.O.AV85VlrOffSet,0)},c2v:function(){gx.O.AV85VlrOffSet=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVLROFFSET",'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSELECT",gxz:"ZV55Select",gxold:"OV55Select",gxvar:"AV55Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55Select=Value},v2z:function(Value){gx.O.ZV55Select=Value},v2c:function(){gx.fn.setControlValue("vSELECT",gx.O.AV55Select,0)},c2v:function(){gx.O.AV55Select=this.val()},val:function(){return gx.fn.getControlValue("vSELECT")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFROMJOINWHERE",gxz:"ZV20FromJoinWhere",gxold:"OV20FromJoinWhere",gxvar:"AV20FromJoinWhere",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FromJoinWhere=Value},v2z:function(Value){gx.O.ZV20FromJoinWhere=Value},v2c:function(){gx.fn.setControlValue("vFROMJOINWHERE",gx.O.AV20FromJoinWhere,0)},c2v:function(){gx.O.AV20FromJoinWhere=this.val()},val:function(){return gx.fn.getControlValue("vFROMJOINWHERE")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGROUPORDER",gxz:"ZV21GroupOrder",gxold:"OV21GroupOrder",gxvar:"AV21GroupOrder",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21GroupOrder=Value},v2z:function(Value){gx.O.ZV21GroupOrder=Value},v2c:function(){gx.fn.setControlValue("vGROUPORDER",gx.O.AV21GroupOrder,0)},c2v:function(){gx.O.AV21GroupOrder=this.val()},val:function(){return gx.fn.getControlValue("vGROUPORDER")},nac:gx.falseFn};
   GXValidFnc[111]={fld:"BTNHELP",grid:0};
   this.AV62TpConsultas = "" ;
   this.ZV62TpConsultas = "" ;
   this.OV62TpConsultas = "" ;
   this.ZV105GXV10S = 0 ;
   this.OV105GXV10S = 0 ;
   this.ZV106GXV10T = "" ;
   this.OV106GXV10T = "" ;
   this.ZV107GXV10U = "" ;
   this.OV107GXV10U = "" ;
   this.ZV108GXV10V = "" ;
   this.OV108GXV10V = "" ;
   this.ZV109GXV10W = "" ;
   this.OV109GXV10W = "" ;
   this.ZV110GXV10X = "" ;
   this.OV110GXV10X = "" ;
   this.ZV111GXV10Y = "" ;
   this.OV111GXV10Y = "" ;
   this.ZV112GXV10Z = "" ;
   this.OV112GXV10Z = "" ;
   this.ZV113GXV110 = "" ;
   this.OV113GXV110 = "" ;
   this.ZV114GXV111 = "" ;
   this.OV114GXV111 = "" ;
   this.ZV115GXV112 = "" ;
   this.OV115GXV112 = "" ;
   this.ZV116GXV113 = "" ;
   this.OV116GXV113 = "" ;
   this.ZV117GXV114 = "" ;
   this.OV117GXV114 = "" ;
   this.ZV118GXV115 = "" ;
   this.OV118GXV115 = "" ;
   this.ZV119GXV116 = "" ;
   this.OV119GXV116 = "" ;
   this.ZV120GXV117 = "" ;
   this.OV120GXV117 = "" ;
   this.ZV121GXV118 = "" ;
   this.OV121GXV118 = "" ;
   this.ZV122GXV119 = "" ;
   this.OV122GXV119 = "" ;
   this.ZV123GXV11A = "" ;
   this.OV123GXV11A = "" ;
   this.ZV124GXV11B = "" ;
   this.OV124GXV11B = "" ;
   this.ZV125GXV11C = "" ;
   this.OV125GXV11C = "" ;
   this.ZV126GXV11D = "" ;
   this.OV126GXV11D = "" ;
   this.ZV127GXV11E = "" ;
   this.OV127GXV11E = "" ;
   this.ZV128GXV11F = "" ;
   this.OV128GXV11F = "" ;
   this.ZV129GXV11G = "" ;
   this.OV129GXV11G = "" ;
   this.ZV130GXV11H = "" ;
   this.OV130GXV11H = "" ;
   this.ZV131GXV11I = "" ;
   this.OV131GXV11I = "" ;
   this.ZV132GXV11J = "" ;
   this.OV132GXV11J = "" ;
   this.ZV133GXV11K = "" ;
   this.OV133GXV11K = "" ;
   this.ZV134GXV11L = "" ;
   this.OV134GXV11L = "" ;
   this.ZV135GXV11M = "" ;
   this.OV135GXV11M = "" ;
   this.ZV136GXV11N = "" ;
   this.OV136GXV11N = "" ;
   this.ZV137GXV11O = "" ;
   this.OV137GXV11O = "" ;
   this.ZV138GXV11P = "" ;
   this.OV138GXV11P = "" ;
   this.ZV139GXV11Q = "" ;
   this.OV139GXV11Q = "" ;
   this.ZV140GXV11R = "" ;
   this.OV140GXV11R = "" ;
   this.ZV141GXV11S = "" ;
   this.OV141GXV11S = "" ;
   this.ZV142GXV11T = "" ;
   this.OV142GXV11T = "" ;
   this.ZV143GXV11U = "" ;
   this.OV143GXV11U = "" ;
   this.ZV144GXV11V = "" ;
   this.OV144GXV11V = "" ;
   this.ZV145GXV11W = "" ;
   this.OV145GXV11W = "" ;
   this.ZV146GXV11X = "" ;
   this.OV146GXV11X = "" ;
   this.ZV147GXV11Y = "" ;
   this.OV147GXV11Y = "" ;
   this.ZV148GXV11Z = "" ;
   this.OV148GXV11Z = "" ;
   this.ZV149GXV120 = "" ;
   this.OV149GXV120 = "" ;
   this.ZV150GXV121 = "" ;
   this.OV150GXV121 = "" ;
   this.ZV151GXV122 = "" ;
   this.OV151GXV122 = "" ;
   this.ZV152GXV123 = "" ;
   this.OV152GXV123 = "" ;
   this.ZV153GXV124 = "" ;
   this.OV153GXV124 = "" ;
   this.ZV154GXV125 = "" ;
   this.OV154GXV125 = "" ;
   this.ZV155GXV126 = "" ;
   this.OV155GXV126 = "" ;
   this.AV16EmpresaPadraoCla = "" ;
   this.ZV16EmpresaPadraoCla = "" ;
   this.OV16EmpresaPadraoCla = "" ;
   this.AV36NumCampos = 0 ;
   this.ZV36NumCampos = 0 ;
   this.OV36NumCampos = 0 ;
   this.AV23Idx = 0 ;
   this.ZV23Idx = 0 ;
   this.OV23Idx = 0 ;
   this.AV44QtdTotalPagGrid = 0 ;
   this.ZV44QtdTotalPagGrid = 0 ;
   this.OV44QtdTotalPagGrid = 0 ;
   this.AV38Pagina = 0 ;
   this.ZV38Pagina = 0 ;
   this.OV38Pagina = 0 ;
   this.AV24Idx1 = 0 ;
   this.ZV24Idx1 = 0 ;
   this.OV24Idx1 = 0 ;
   this.AV43QtdRegistros = 0 ;
   this.ZV43QtdRegistros = 0 ;
   this.OV43QtdRegistros = 0 ;
   this.AV34NomeFile = "" ;
   this.ZV34NomeFile = "" ;
   this.OV34NomeFile = "" ;
   this.AV66SNPesquisar = "" ;
   this.ZV66SNPesquisar = "" ;
   this.OV66SNPesquisar = "" ;
   this.AV68SnOk = "" ;
   this.ZV68SnOk = "" ;
   this.OV68SnOk = "" ;
   this.AV76tamanhoFrom = 0 ;
   this.ZV76tamanhoFrom = 0 ;
   this.OV76tamanhoFrom = 0 ;
   this.AV83PaginaAux = 0 ;
   this.ZV83PaginaAux = 0 ;
   this.OV83PaginaAux = 0 ;
   this.AV85VlrOffSet = 0 ;
   this.ZV85VlrOffSet = 0 ;
   this.OV85VlrOffSet = 0 ;
   this.AV55Select = "" ;
   this.ZV55Select = "" ;
   this.OV55Select = "" ;
   this.AV20FromJoinWhere = "" ;
   this.ZV20FromJoinWhere = "" ;
   this.OV20FromJoinWhere = "" ;
   this.AV21GroupOrder = "" ;
   this.ZV21GroupOrder = "" ;
   this.OV21GroupOrder = "" ;
   this.AV62TpConsultas = "" ;
   this.AV16EmpresaPadraoCla = "" ;
   this.AV36NumCampos = 0 ;
   this.AV23Idx = 0 ;
   this.AV44QtdTotalPagGrid = 0 ;
   this.AV38Pagina = 0 ;
   this.AV24Idx1 = 0 ;
   this.AV43QtdRegistros = 0 ;
   this.AV34NomeFile = "" ;
   this.AV66SNPesquisar = "" ;
   this.AV68SnOk = "" ;
   this.AV76tamanhoFrom = 0 ;
   this.AV83PaginaAux = 0 ;
   this.AV85VlrOffSet = 0 ;
   this.AV55Select = "" ;
   this.AV20FromJoinWhere = "" ;
   this.AV21GroupOrder = "" ;
   this.GXV10S = 0 ;
   this.GXV10T = "" ;
   this.GXV10U = "" ;
   this.GXV10V = "" ;
   this.GXV10W = "" ;
   this.GXV10X = "" ;
   this.GXV10Y = "" ;
   this.GXV10Z = "" ;
   this.GXV110 = "" ;
   this.GXV111 = "" ;
   this.GXV112 = "" ;
   this.GXV113 = "" ;
   this.GXV114 = "" ;
   this.GXV115 = "" ;
   this.GXV116 = "" ;
   this.GXV117 = "" ;
   this.GXV118 = "" ;
   this.GXV119 = "" ;
   this.GXV11A = "" ;
   this.GXV11B = "" ;
   this.GXV11C = "" ;
   this.GXV11D = "" ;
   this.GXV11E = "" ;
   this.GXV11F = "" ;
   this.GXV11G = "" ;
   this.GXV11H = "" ;
   this.GXV11I = "" ;
   this.GXV11J = "" ;
   this.GXV11K = "" ;
   this.GXV11L = "" ;
   this.GXV11M = "" ;
   this.GXV11N = "" ;
   this.GXV11O = "" ;
   this.GXV11P = "" ;
   this.GXV11Q = "" ;
   this.GXV11R = "" ;
   this.GXV11S = "" ;
   this.GXV11T = "" ;
   this.GXV11U = "" ;
   this.GXV11V = "" ;
   this.GXV11W = "" ;
   this.GXV11X = "" ;
   this.GXV11Y = "" ;
   this.GXV11Z = "" ;
   this.GXV120 = "" ;
   this.GXV121 = "" ;
   this.GXV122 = "" ;
   this.GXV123 = "" ;
   this.GXV124 = "" ;
   this.GXV125 = "" ;
   this.GXV126 = "" ;
   this.AV12ConteudoCampo = "" ;
   this.AV88Resultado = "" ;
   this.AV57SnErro = "" ;
   this.AV100Modo = "" ;
   this.AV93jdbcUrl = "" ;
   this.AV94user = "" ;
   this.AV95pass = "" ;
   this.AV96JdbcDriver = "" ;
   this.AV92LibPath = "" ;
   this.AV54SdtSql = [ ] ;
   this.AV63Txt = "" ;
   this.AV67SQLAux = "" ;
   this.AV53SdtCamposItem = {} ;
   this.AV39Qtd = 0 ;
   this.AV42QtdEntrada = [ ] ;
   this.AV37NumEntrada = 0 ;
   this.AV61TamanhoAux = 0 ;
   this.AV59tamanho = 0 ;
   this.Events = {"e1120c2_client": ["'FECHAR'", true] ,"e1420c2_client": ["ENTER", true] ,"e1520c2_client": ["'ALTERASQL'", true] ,"e1220c2_client": ["'GXM_NEXT'", true] ,"e1320c2_client": ["'GXM_PREVIOUS'", true] ,"e1620c2_client": ["'VERSQL'", true] ,"e2220c2_client": ["CANCEL", true] ,"e2120c1_client": ["VTPCONSULTAS.ISVALID", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'}],[{ctrl:'BUTTON4',prop:'Caption'},{av:'AV52SdtCampos',fld:'vSDTCAMPOS'},{av:'AV162GXV7',fld:'vGXV7'},{av:'AV53SdtCamposItem',fld:'vSDTCAMPOSITEM'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV100Modo',fld:'vMODO'},{av:'AV58SQL',fld:'vSQL'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV68SnOk',fld:'vSNOK'},{av:'gx.fn.getCtrlProperty("GRID1","Visible")',ctrl:'GRID1',prop:'Visible'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'gx.fn.getCtrlProperty("GERARCSV","Link")',ctrl:'GERARCSV',prop:'Link'},{av:'gx.fn.getCtrlProperty("VERSQL","Enabled")',ctrl:'VERSQL',prop:'Enabled'},{av:'AV56SnArquivo',fld:'vSNARQUIVO'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV59tamanho',fld:'vTAMANHO'},{av:'AV61TamanhoAux',fld:'vTAMANHOAUX'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV63Txt',fld:'vTXT'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{ctrl:'CTLVIEWBANCOCAMPO01',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Title'},{av:'AV55Select',fld:'vSELECT'},{av:'AV21GroupOrder',fld:'vGROUPORDER'},{av:'AV91BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV52SdtCampos',fld:'vSDTCAMPOS'},{av:'AV56SnArquivo',fld:'vSNARQUIVO'},{av:'AV63Txt',fld:'vTXT'},{av:'AV99SNValida',fld:'vSNVALIDA'},{av:'AV69count',fld:'vCOUNT'}],[{av:'AV68SnOk',fld:'vSNOK'},{av:'AV99SNValida',fld:'vSNVALIDA'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV100Modo',fld:'vMODO'},{av:'AV58SQL',fld:'vSQL'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV52SdtCampos',fld:'vSDTCAMPOS'},{av:'AV56SnArquivo',fld:'vSNARQUIVO'},{av:'AV161GXV6',fld:'vGXV6'},{av:'AV63Txt',fld:'vTXT'},{av:'AV162GXV7',fld:'vGXV7'},{av:'AV53SdtCamposItem',fld:'vSDTCAMPOSITEM'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'gx.fn.getCtrlProperty("GRID1","Visible")',ctrl:'GRID1',prop:'Visible'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'gx.fn.getCtrlProperty("GERARCSV","Link")',ctrl:'GERARCSV',prop:'Link'},{av:'gx.fn.getCtrlProperty("VERSQL","Enabled")',ctrl:'VERSQL',prop:'Enabled'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV22i',fld:'vI'},{av:'AV69count',fld:'vCOUNT'},{av:'AV59tamanho',fld:'vTAMANHO'},{av:'AV77TxtVerifica',fld:'vTXTVERIFICA'},{av:'AV55Select',fld:'vSELECT'},{av:'AV61TamanhoAux',fld:'vTAMANHOAUX'},{av:'AV21GroupOrder',fld:'vGROUPORDER'},{av:'AV40QtdCampos',fld:'vQTDCAMPOS'},{av:'AV42QtdEntrada',fld:'vQTDENTRADA'},{av:'AV37NumEntrada',fld:'vNUMENTRADA'},{av:'AV39Qtd',fld:'vQTD'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV88Resultado',fld:'vRESULTADO'},{ctrl:'CTLVIEWBANCOCAMPO01',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Title'},{av:'AV67SQLAux',fld:'vSQLAUX'},{av:'AV91BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'}]];
   this.EvtParms["'ALTERASQL'"] = [[{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV56SnArquivo',fld:'vSNARQUIVO'},{av:'AV63Txt',fld:'vTXT'},{av:'AV99SNValida',fld:'vSNVALIDA'},{av:'AV69count',fld:'vCOUNT'},{av:'AV52SdtCampos',fld:'vSDTCAMPOS'}],[{av:'gx.fn.getCtrlProperty("GERARCSV","Link")',ctrl:'GERARCSV',prop:'Link'},{av:'gx.fn.getCtrlProperty("VERSQL","Enabled")',ctrl:'VERSQL',prop:'Enabled'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV99SNValida',fld:'vSNVALIDA'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV100Modo',fld:'vMODO'},{av:'AV52SdtCampos',fld:'vSDTCAMPOS'},{av:'AV56SnArquivo',fld:'vSNARQUIVO'},{av:'AV161GXV6',fld:'vGXV6'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV63Txt',fld:'vTXT'},{av:'AV22i',fld:'vI'},{av:'AV69count',fld:'vCOUNT'},{av:'AV59tamanho',fld:'vTAMANHO'},{av:'AV77TxtVerifica',fld:'vTXTVERIFICA'},{av:'AV55Select',fld:'vSELECT'},{av:'AV61TamanhoAux',fld:'vTAMANHOAUX'},{av:'AV21GroupOrder',fld:'vGROUPORDER'},{av:'AV40QtdCampos',fld:'vQTDCAMPOS'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV42QtdEntrada',fld:'vQTDENTRADA'},{av:'AV37NumEntrada',fld:'vNUMENTRADA'},{av:'AV39Qtd',fld:'vQTD'},{av:'AV53SdtCamposItem',fld:'vSDTCAMPOSITEM'},{av:'AV67SQLAux',fld:'vSQLAUX'},{av:'AV57SnErro',fld:'vSNERRO'}]];
   this.EvtParms["GRID1.REFRESH"] = [[{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'}],[{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV83PaginaAux',fld:'vPAGINAAUX'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV163GXV8',fld:'vGXV8'},{av:'AV84SdtSqlItem',fld:'vSDTSQLITEM'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'}],[{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV63Txt',fld:'vTXT'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV91BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'}],[{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV63Txt',fld:'vTXT'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV91BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'}]];
   this.EvtParms["'VERSQL'"] = [[{av:'gx.fn.getCtrlProperty("GERARCSV","Link")',ctrl:'GERARCSV',prop:'Link'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'}],[{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27}]];
   this.EvtParms["VTPCONSULTAS.ISVALID"] = [[{av:'AV62TpConsultas',fld:'vTPCONSULTAS'}],[{ctrl:'BUTTON4',prop:'Caption'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV85VlrOffSet',fld:'vVLROFFSET'}],[{ctrl:'BUTTON4',prop:'Caption'},{av:'AV52SdtCampos',fld:'vSDTCAMPOS'},{av:'AV162GXV7',fld:'vGXV7'},{av:'AV53SdtCamposItem',fld:'vSDTCAMPOSITEM'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV100Modo',fld:'vMODO'},{av:'AV58SQL',fld:'vSQL'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV68SnOk',fld:'vSNOK'},{av:'gx.fn.getCtrlProperty("GRID1","Visible")',ctrl:'GRID1',prop:'Visible'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'gx.fn.getCtrlProperty("GERARCSV","Link")',ctrl:'GERARCSV',prop:'Link'},{av:'gx.fn.getCtrlProperty("VERSQL","Enabled")',ctrl:'VERSQL',prop:'Enabled'},{av:'AV56SnArquivo',fld:'vSNARQUIVO'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV59tamanho',fld:'vTAMANHO'},{av:'AV61TamanhoAux',fld:'vTAMANHOAUX'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV63Txt',fld:'vTXT'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{ctrl:'CTLVIEWBANCOCAMPO01',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Title'},{av:'AV55Select',fld:'vSELECT'},{av:'AV21GroupOrder',fld:'vGROUPORDER'},{av:'AV91BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV85VlrOffSet',fld:'vVLROFFSET'}],[{ctrl:'BUTTON4',prop:'Caption'},{av:'AV52SdtCampos',fld:'vSDTCAMPOS'},{av:'AV162GXV7',fld:'vGXV7'},{av:'AV53SdtCamposItem',fld:'vSDTCAMPOSITEM'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV100Modo',fld:'vMODO'},{av:'AV58SQL',fld:'vSQL'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV68SnOk',fld:'vSNOK'},{av:'gx.fn.getCtrlProperty("GRID1","Visible")',ctrl:'GRID1',prop:'Visible'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'gx.fn.getCtrlProperty("GERARCSV","Link")',ctrl:'GERARCSV',prop:'Link'},{av:'gx.fn.getCtrlProperty("VERSQL","Enabled")',ctrl:'VERSQL',prop:'Enabled'},{av:'AV56SnArquivo',fld:'vSNARQUIVO'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV59tamanho',fld:'vTAMANHO'},{av:'AV61TamanhoAux',fld:'vTAMANHOAUX'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV63Txt',fld:'vTXT'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{ctrl:'CTLVIEWBANCOCAMPO01',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Title'},{av:'AV55Select',fld:'vSELECT'},{av:'AV21GroupOrder',fld:'vGROUPORDER'},{av:'AV91BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV85VlrOffSet',fld:'vVLROFFSET'}],[{ctrl:'BUTTON4',prop:'Caption'},{av:'AV52SdtCampos',fld:'vSDTCAMPOS'},{av:'AV162GXV7',fld:'vGXV7'},{av:'AV53SdtCamposItem',fld:'vSDTCAMPOSITEM'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV100Modo',fld:'vMODO'},{av:'AV58SQL',fld:'vSQL'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV68SnOk',fld:'vSNOK'},{av:'gx.fn.getCtrlProperty("GRID1","Visible")',ctrl:'GRID1',prop:'Visible'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'gx.fn.getCtrlProperty("GERARCSV","Link")',ctrl:'GERARCSV',prop:'Link'},{av:'gx.fn.getCtrlProperty("VERSQL","Enabled")',ctrl:'VERSQL',prop:'Enabled'},{av:'AV56SnArquivo',fld:'vSNARQUIVO'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV59tamanho',fld:'vTAMANHO'},{av:'AV61TamanhoAux',fld:'vTAMANHOAUX'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV63Txt',fld:'vTXT'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{ctrl:'CTLVIEWBANCOCAMPO01',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Title'},{av:'AV55Select',fld:'vSELECT'},{av:'AV21GroupOrder',fld:'vGROUPORDER'},{av:'AV91BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV68SnOk',fld:'vSNOK'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'AV100Modo',fld:'vMODO'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{av:'AV85VlrOffSet',fld:'vVLROFFSET'}],[{ctrl:'BUTTON4',prop:'Caption'},{av:'AV52SdtCampos',fld:'vSDTCAMPOS'},{av:'AV162GXV7',fld:'vGXV7'},{av:'AV53SdtCamposItem',fld:'vSDTCAMPOSITEM'},{av:'AV20FromJoinWhere',fld:'vFROMJOINWHERE'},{av:'AV100Modo',fld:'vMODO'},{av:'AV58SQL',fld:'vSQL'},{av:'AV62TpConsultas',fld:'vTPCONSULTAS'},{av:'AV76tamanhoFrom',fld:'vTAMANHOFROM'},{av:'AV85VlrOffSet',fld:'vVLROFFSET'},{av:'AV36NumCampos',fld:'vNUMCAMPOS'},{av:'AV68SnOk',fld:'vSNOK'},{av:'gx.fn.getCtrlProperty("GRID1","Visible")',ctrl:'GRID1',prop:'Visible'},{av:'AV57SnErro',fld:'vSNERRO'},{av:'AV66SNPesquisar',fld:'vSNPESQUISAR'},{av:'gx.fn.getCtrlProperty("GERARCSV","Link")',ctrl:'GERARCSV',prop:'Link'},{av:'gx.fn.getCtrlProperty("VERSQL","Enabled")',ctrl:'VERSQL',prop:'Enabled'},{av:'AV56SnArquivo',fld:'vSNARQUIVO'},{av:'AV38Pagina',fld:'vPAGINA'},{av:'AV59tamanho',fld:'vTAMANHO'},{av:'AV61TamanhoAux',fld:'vTAMANHOAUX'},{av:'AV12ConteudoCampo',fld:'vCONTEUDOCAMPO'},{av:'AV63Txt',fld:'vTXT'},{av:'AV88Resultado',fld:'vRESULTADO'},{av:'AV54SdtSql',fld:'vSDTSQL',grid:27},{ctrl:'CTLVIEWBANCOCAMPO01',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO02',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO03',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO04',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO05',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO06',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO07',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO08',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO09',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO10',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO11',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO12',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO13',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO14',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO15',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO16',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO17',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO18',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO19',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO20',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO21',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO22',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO23',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO24',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO25',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO26',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO27',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO28',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO29',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO30',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO31',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO32',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO33',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO34',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO35',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO36',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO37',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO38',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO39',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO40',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO41',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO42',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO43',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO44',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO45',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO46',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO47',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO48',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO49',prop:'Title'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Visible'},{ctrl:'CTLVIEWBANCOCAMPO50',prop:'Title'},{av:'AV55Select',fld:'vSELECT'},{av:'AV21GroupOrder',fld:'vGROUPORDER'},{av:'AV91BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'AV93jdbcUrl',fld:'vJDBCURL'},{av:'AV94user',fld:'vUSER'},{av:'AV95pass',fld:'vPASS'},{av:'AV96JdbcDriver',fld:'vJDBCDRIVER'},{av:'AV92LibPath',fld:'vLIBPATH'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV12ConteudoCampo", "vCONTEUDOCAMPO", 0, "svchar");
   this.setVCMap("AV88Resultado", "vRESULTADO", 0, "vchar");
   this.setVCMap("AV57SnErro", "vSNERRO", 0, "svchar");
   this.setVCMap("AV100Modo", "vMODO", 0, "char");
   this.setVCMap("AV93jdbcUrl", "vJDBCURL", 0, "svchar");
   this.setVCMap("AV94user", "vUSER", 0, "char");
   this.setVCMap("AV95pass", "vPASS", 0, "char");
   this.setVCMap("AV96JdbcDriver", "vJDBCDRIVER", 0, "char");
   this.setVCMap("AV92LibPath", "vLIBPATH", 0, "char");
   this.setVCMap("AV54SdtSql", "vSDTSQL", 0, "CollSdtSql.SdtSqlItem");
   this.setVCMap("AV12ConteudoCampo", "vCONTEUDOCAMPO", 0, "svchar");
   this.setVCMap("AV88Resultado", "vRESULTADO", 0, "vchar");
   this.setVCMap("AV57SnErro", "vSNERRO", 0, "svchar");
   this.setVCMap("AV100Modo", "vMODO", 0, "char");
   this.setVCMap("AV93jdbcUrl", "vJDBCURL", 0, "svchar");
   this.setVCMap("AV94user", "vUSER", 0, "char");
   this.setVCMap("AV95pass", "vPASS", 0, "char");
   this.setVCMap("AV96JdbcDriver", "vJDBCDRIVER", 0, "char");
   this.setVCMap("AV92LibPath", "vLIBPATH", 0, "char");
   this.setVCMap("AV54SdtSql", "vSDTSQL", 0, "CollSdtSql.SdtSqlItem");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12ConteudoCampo"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[108]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[104]);
   Grid1Container.addRefreshingVar({rfrVar:"AV88Resultado"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[103]);
   Grid1Container.addRefreshingVar({rfrVar:"AV57SnErro"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[102]);
   Grid1Container.addRefreshingVar({rfrVar:"AV100Modo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV93jdbcUrl"});
   Grid1Container.addRefreshingVar({rfrVar:"AV94user"});
   Grid1Container.addRefreshingVar({rfrVar:"AV95pass"});
   Grid1Container.addRefreshingVar({rfrVar:"AV96JdbcDriver"});
   Grid1Container.addRefreshingVar({rfrVar:"AV92LibPath"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[95]);
   Grid1Container.addRefreshingVar({rfrVar:"AV54SdtSql"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[98]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[106]);
   this.addGridBCProperty("Sdtsql", ["NumLinha"], this.GXValidFnc[28], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo01"], this.GXValidFnc[29], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo02"], this.GXValidFnc[30], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo03"], this.GXValidFnc[31], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo04"], this.GXValidFnc[32], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo05"], this.GXValidFnc[33], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo06"], this.GXValidFnc[34], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo07"], this.GXValidFnc[35], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo08"], this.GXValidFnc[36], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo09"], this.GXValidFnc[37], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo10"], this.GXValidFnc[38], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo11"], this.GXValidFnc[39], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo12"], this.GXValidFnc[40], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo13"], this.GXValidFnc[41], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo14"], this.GXValidFnc[42], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo15"], this.GXValidFnc[43], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo16"], this.GXValidFnc[44], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo17"], this.GXValidFnc[45], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo18"], this.GXValidFnc[46], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo19"], this.GXValidFnc[47], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo20"], this.GXValidFnc[48], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo21"], this.GXValidFnc[49], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo22"], this.GXValidFnc[50], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo23"], this.GXValidFnc[51], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo24"], this.GXValidFnc[52], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo25"], this.GXValidFnc[53], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo26"], this.GXValidFnc[54], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo27"], this.GXValidFnc[55], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo28"], this.GXValidFnc[56], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo29"], this.GXValidFnc[57], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo30"], this.GXValidFnc[58], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo31"], this.GXValidFnc[59], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo32"], this.GXValidFnc[60], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo33"], this.GXValidFnc[61], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo34"], this.GXValidFnc[62], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo35"], this.GXValidFnc[63], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo36"], this.GXValidFnc[64], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo37"], this.GXValidFnc[65], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo38"], this.GXValidFnc[66], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo39"], this.GXValidFnc[67], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo40"], this.GXValidFnc[68], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo41"], this.GXValidFnc[69], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo42"], this.GXValidFnc[70], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo43"], this.GXValidFnc[71], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo44"], this.GXValidFnc[72], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo45"], this.GXValidFnc[73], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo46"], this.GXValidFnc[74], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo47"], this.GXValidFnc[75], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo48"], this.GXValidFnc[76], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo49"], this.GXValidFnc[77], "AV54SdtSql");
   this.addGridBCProperty("Sdtsql", ["ViewBancoCampo50"], this.GXValidFnc[78], "AV54SdtSql");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarsql());
