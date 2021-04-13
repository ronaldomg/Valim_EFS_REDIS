/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:19:57.79
*/
gx.evt.autoSkip = false;
gx.define('hconsultaloteloteamento', false, function () {
   this.ServerClass =  "hconsultaloteloteamento" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV37DescLote=gx.fn.getControlValue("vDESCLOTE") ;
      this.AV38DescQuadra=gx.fn.getControlValue("vDESCQUADRA") ;
      this.AV40DescArea=gx.fn.getControlValue("vDESCAREA") ;
      this.AV27LoteNumLotePar=gx.fn.getControlValue("vLOTENUMLOTEPAR") ;
      this.AV28LoteNumQuadraPar=gx.fn.getControlValue("vLOTENUMQUADRAPAR") ;
   };
   this.Validv_Loteamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vLOTEAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17u92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11u92_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12u92_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13u92_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14u92_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15u92_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19u92_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21u91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,20,23,25,26,32,33,34,35,41,44,46,48,50,52,53,54,55,56,57,58];
   this.GXLastCtrlId =58;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaloteloteamento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5316,32,"LOTENUMLOTE","","","LoteNumLote","char",0,"px",5,5,"left",null,[],5316,"LoteNumLote",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5317,33,"LOTENUMQUADRA","","","LoteNumQuadra","char",0,"px",5,5,"left",null,[],5317,"LoteNumQuadra",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5299,34,"LOTESITUACAODESCRICAO","Situação","","LoteSituacaoDescricao","char",0,"px",30,30,"left",null,[],5299,"LoteSituacaoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5295,35,"LOTEAREATOTAL","","","LoteAreaTotal","decimal",0,"px",11,11,"right",null,[],5295,"LoteAreaTotal",true,3,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTEMP",gxz:"ZV39DescLotEmp",gxold:"OV39DescLotEmp",gxvar:"AV39DescLotEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39DescLotEmp=Value},v2z:function(Value){gx.O.ZV39DescLotEmp=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTEMP",gx.O.AV39DescLotEmp,0)},c2v:function(){gx.O.AV39DescLotEmp=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTEMP")},nac:gx.falseFn};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Loteamentoid,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTEAMENTOID",gxz:"ZV21LoteamentoId",gxold:"OV21LoteamentoId",gxvar:"AV21LoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21LoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLOTEAMENTOID",gx.O.AV21LoteamentoId,0)},c2v:function(){gx.O.AV21LoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEAMENTONOME",gxz:"ZV24LoteamentoNome",gxold:"OV24LoteamentoNome",gxvar:"AV24LoteamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24LoteamentoNome=Value},v2z:function(Value){gx.O.ZV24LoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("vLOTEAMENTONOME",gx.O.AV24LoteamentoNome,0)},c2v:function(){gx.O.AV24LoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("vLOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLOTEQUADRA",gxz:"ZV25DescLoteQuadra",gxold:"OV25DescLoteQuadra",gxvar:"AV25DescLoteQuadra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DescLoteQuadra=Value},v2z:function(Value){gx.O.ZV25DescLoteQuadra=Value},v2c:function(){gx.fn.setControlValue("vDESCLOTEQUADRA",gx.O.AV25DescLoteQuadra,0)},c2v:function(){gx.O.AV25DescLoteQuadra=this.val()},val:function(){return gx.fn.getControlValue("vDESCLOTEQUADRA")},nac:gx.falseFn};
   GXValidFnc[19]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTENUMLOTE",gxz:"ZV22LoteNumLote",gxold:"OV22LoteNumLote",gxvar:"AV22LoteNumLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22LoteNumLote=Value},v2z:function(Value){gx.O.ZV22LoteNumLote=Value},v2c:function(){gx.fn.setControlValue("vLOTENUMLOTE",gx.O.AV22LoteNumLote,0)},c2v:function(){gx.O.AV22LoteNumLote=this.val()},val:function(){return gx.fn.getControlValue("vLOTENUMLOTE")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLOTENUMQUADRA",gxz:"ZV23LoteNumQuadra",gxold:"OV23LoteNumQuadra",gxvar:"AV23LoteNumQuadra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23LoteNumQuadra=Value},v2z:function(Value){gx.O.ZV23LoteNumQuadra=Value},v2c:function(){gx.fn.setControlValue("vLOTENUMQUADRA",gx.O.AV23LoteNumQuadra,0)},c2v:function(){gx.O.AV23LoteNumQuadra=this.val()},val:function(){return gx.fn.getControlValue("vLOTENUMQUADRA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSITUACAOID",gxz:"ZV26SituacaoId",gxold:"OV26SituacaoId",gxvar:"AV26SituacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26SituacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26SituacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSITUACAOID",gx.O.AV26SituacaoId,0)},c2v:function(){gx.O.AV26SituacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSITUACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAODESCRICAO",gxz:"ZV29SituacaoDescricao",gxold:"OV29SituacaoDescricao",gxvar:"AV29SituacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29SituacaoDescricao=Value},v2z:function(Value){gx.O.ZV29SituacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vSITUACAODESCRICAO",gx.O.AV29SituacaoDescricao,0)},c2v:function(){gx.O.AV29SituacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTENUMLOTE",gxz:"Z5316LoteNumLote",gxold:"O5316LoteNumLote",gxvar:"A5316LoteNumLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5316LoteNumLote=Value},v2z:function(Value){gx.O.Z5316LoteNumLote=Value},v2c:function(row){gx.fn.setGridControlValue("LOTENUMLOTE",row || gx.fn.currentGridRowImpl(31),gx.O.A5316LoteNumLote,0)},c2v:function(){gx.O.A5316LoteNumLote=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTENUMLOTE",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTENUMQUADRA",gxz:"Z5317LoteNumQuadra",gxold:"O5317LoteNumQuadra",gxvar:"A5317LoteNumQuadra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5317LoteNumQuadra=Value},v2z:function(Value){gx.O.Z5317LoteNumQuadra=Value},v2c:function(row){gx.fn.setGridControlValue("LOTENUMQUADRA",row || gx.fn.currentGridRowImpl(31),gx.O.A5317LoteNumQuadra,0)},c2v:function(){gx.O.A5317LoteNumQuadra=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTENUMQUADRA",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:30,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTESITUACAODESCRICAO",gxz:"Z5299LoteSituacaoDescricao",gxold:"O5299LoteSituacaoDescricao",gxvar:"A5299LoteSituacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5299LoteSituacaoDescricao=Value},v2z:function(Value){gx.O.Z5299LoteSituacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("LOTESITUACAODESCRICAO",row || gx.fn.currentGridRowImpl(31),gx.O.A5299LoteSituacaoDescricao,0)},c2v:function(){gx.O.A5299LoteSituacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("LOTESITUACAODESCRICAO",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZ,ZZ9.999",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAREATOTAL",gxz:"Z5295LoteAreaTotal",gxold:"O5295LoteAreaTotal",gxvar:"A5295LoteAreaTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5295LoteAreaTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5295LoteAreaTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LOTEAREATOTAL",row || gx.fn.currentGridRowImpl(31),gx.O.A5295LoteAreaTotal,3,',')},c2v:function(){gx.O.A5295LoteAreaTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LOTEAREATOTAL",row || gx.fn.currentGridRowImpl(31),'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLENAV",grid:0};
   GXValidFnc[44]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[52]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[53]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOEMPRESAID",gxz:"ZV32SituacaoEmpresaId",gxold:"OV32SituacaoEmpresaId",gxvar:"AV32SituacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32SituacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV32SituacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSITUACAOEMPRESAID",gx.O.AV32SituacaoEmpresaId,0)},c2v:function(){gx.O.AV32SituacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV34Pagina",gxold:"OV34Pagina",gxvar:"AV34Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV34Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV34Pagina)},c2v:function(){gx.O.AV34Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV35PaginaAux",gxold:"OV35PaginaAux",gxvar:"AV35PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV35PaginaAux,0)},c2v:function(){gx.O.AV35PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"PROMPT_SITUACAOID",grid:0};
   this.AV39DescLotEmp = "" ;
   this.ZV39DescLotEmp = "" ;
   this.OV39DescLotEmp = "" ;
   this.AV21LoteamentoId = 0 ;
   this.ZV21LoteamentoId = 0 ;
   this.OV21LoteamentoId = 0 ;
   this.AV24LoteamentoNome = "" ;
   this.ZV24LoteamentoNome = "" ;
   this.OV24LoteamentoNome = "" ;
   this.AV25DescLoteQuadra = "" ;
   this.ZV25DescLoteQuadra = "" ;
   this.OV25DescLoteQuadra = "" ;
   this.AV22LoteNumLote = "" ;
   this.ZV22LoteNumLote = "" ;
   this.OV22LoteNumLote = "" ;
   this.AV23LoteNumQuadra = "" ;
   this.ZV23LoteNumQuadra = "" ;
   this.OV23LoteNumQuadra = "" ;
   this.AV26SituacaoId = 0 ;
   this.ZV26SituacaoId = 0 ;
   this.OV26SituacaoId = 0 ;
   this.AV29SituacaoDescricao = "" ;
   this.ZV29SituacaoDescricao = "" ;
   this.OV29SituacaoDescricao = "" ;
   this.Z5316LoteNumLote = "" ;
   this.O5316LoteNumLote = "" ;
   this.Z5317LoteNumQuadra = "" ;
   this.O5317LoteNumQuadra = "" ;
   this.Z5299LoteSituacaoDescricao = "" ;
   this.O5299LoteSituacaoDescricao = "" ;
   this.Z5295LoteAreaTotal = 0 ;
   this.O5295LoteAreaTotal = 0 ;
   this.AV32SituacaoEmpresaId = "" ;
   this.ZV32SituacaoEmpresaId = "" ;
   this.OV32SituacaoEmpresaId = "" ;
   this.AV34Pagina = 0 ;
   this.ZV34Pagina = 0 ;
   this.OV34Pagina = 0 ;
   this.AV35PaginaAux = 0 ;
   this.ZV35PaginaAux = 0 ;
   this.OV35PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV39DescLotEmp = "" ;
   this.AV21LoteamentoId = 0 ;
   this.AV24LoteamentoNome = "" ;
   this.AV25DescLoteQuadra = "" ;
   this.AV22LoteNumLote = "" ;
   this.AV23LoteNumQuadra = "" ;
   this.AV26SituacaoId = 0 ;
   this.AV29SituacaoDescricao = "" ;
   this.AV32SituacaoEmpresaId = "" ;
   this.AV34Pagina = 0 ;
   this.AV35PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV27LoteNumLotePar = "" ;
   this.AV28LoteNumQuadraPar = "" ;
   this.A5298LoteSituacaoId = 0 ;
   this.A5314LoteamentoId = 0 ;
   this.A5290LoteamentoEmpresaId = "" ;
   this.A5297LoteSituacaoEmpId = "" ;
   this.A5316LoteNumLote = "" ;
   this.A5317LoteNumQuadra = "" ;
   this.A5299LoteSituacaoDescricao = "" ;
   this.A5295LoteAreaTotal = 0 ;
   this.A5315LoteamentoNome = "" ;
   this.A5291LoteamentoIdentificacaoLotes = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV37DescLote = "" ;
   this.AV38DescQuadra = "" ;
   this.AV40DescArea = "" ;
   this.Events = {"e17u92_client": ["ENTER", true] ,"e11u92_client": ["'GXM_FIRST'", true] ,"e12u92_client": ["'GXM_PREVIOUS'", true] ,"e13u92_client": ["'GXM_NEXT'", true] ,"e14u92_client": ["'GXM_LAST'", true] ,"e15u92_client": ["'PROCURAR'", true] ,"e19u92_client": ["'ATUALIZAPAGINA'", true] ,"e21u91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV23LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV26SituacaoId',fld:'vSITUACAOID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21LoteamentoId',fld:'vLOTEAMENTOID',hsh:true},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV37DescLote',fld:'vDESCLOTE',hsh:true},{av:'AV38DescQuadra',fld:'vDESCQUADRA',hsh:true},{av:'AV40DescArea',fld:'vDESCAREA',hsh:true}],[{ctrl:'LOTENUMLOTE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTENUMLOTE","Title")',ctrl:'LOTENUMLOTE',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'LOTENUMQUADRA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Title")',ctrl:'LOTENUMQUADRA',prop:'Title'},{ctrl:'LOTEAREATOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LOTEAREATOTAL","Title")',ctrl:'LOTEAREATOTAL',prop:'Title'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV33NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5316LoteNumLote',fld:'LOTENUMLOTE'},{av:'A5317LoteNumQuadra',fld:'LOTENUMQUADRA'}],[{av:'AV27LoteNumLotePar',fld:'vLOTENUMLOTEPAR'},{av:'AV28LoteNumQuadraPar',fld:'vLOTENUMQUADRAPAR'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV23LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV26SituacaoId',fld:'vSITUACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21LoteamentoId',fld:'vLOTEAMENTOID',hsh:true},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'AV37DescLote',fld:'vDESCLOTE',hsh:true},{av:'AV38DescQuadra',fld:'vDESCQUADRA',hsh:true},{av:'AV40DescArea',fld:'vDESCAREA',hsh:true}],[{av:'AV34Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV23LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV26SituacaoId',fld:'vSITUACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21LoteamentoId',fld:'vLOTEAMENTOID',hsh:true},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'AV37DescLote',fld:'vDESCLOTE',hsh:true},{av:'AV38DescQuadra',fld:'vDESCQUADRA',hsh:true},{av:'AV40DescArea',fld:'vDESCAREA',hsh:true},{av:'AV34Pagina',fld:'vPAGINA'}],[{av:'AV34Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV23LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV26SituacaoId',fld:'vSITUACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21LoteamentoId',fld:'vLOTEAMENTOID',hsh:true},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'AV37DescLote',fld:'vDESCLOTE',hsh:true},{av:'AV38DescQuadra',fld:'vDESCQUADRA',hsh:true},{av:'AV40DescArea',fld:'vDESCAREA',hsh:true},{av:'AV34Pagina',fld:'vPAGINA'},{av:'AV35PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV34Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV23LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV26SituacaoId',fld:'vSITUACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21LoteamentoId',fld:'vLOTEAMENTOID',hsh:true},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'AV37DescLote',fld:'vDESCLOTE',hsh:true},{av:'AV38DescQuadra',fld:'vDESCQUADRA',hsh:true},{av:'AV40DescArea',fld:'vDESCAREA',hsh:true},{av:'AV35PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV34Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV23LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV26SituacaoId',fld:'vSITUACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21LoteamentoId',fld:'vLOTEAMENTOID',hsh:true},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'AV37DescLote',fld:'vDESCLOTE',hsh:true},{av:'AV38DescQuadra',fld:'vDESCQUADRA',hsh:true},{av:'AV40DescArea',fld:'vDESCAREA',hsh:true}],[{av:'AV22LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV23LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV22LoteNumLote',fld:'vLOTENUMLOTE'},{av:'AV23LoteNumQuadra',fld:'vLOTENUMQUADRA'},{av:'AV26SituacaoId',fld:'vSITUACAOID'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV21LoteamentoId',fld:'vLOTEAMENTOID',hsh:true},{av:'gx.fn.getCtrlProperty("LOTENUMQUADRA","Visible")',ctrl:'LOTENUMQUADRA',prop:'Visible'},{av:'AV37DescLote',fld:'vDESCLOTE',hsh:true},{av:'AV38DescQuadra',fld:'vDESCQUADRA',hsh:true},{av:'AV40DescArea',fld:'vDESCAREA',hsh:true}],[]];
   this.setPrompt("PROMPT_SITUACAOID", [25]);
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV37DescLote", "vDESCLOTE", 0, "char");
   this.setVCMap("AV38DescQuadra", "vDESCQUADRA", 0, "char");
   this.setVCMap("AV40DescArea", "vDESCAREA", 0, "char");
   this.setVCMap("AV27LoteNumLotePar", "vLOTENUMLOTEPAR", 0, "char");
   this.setVCMap("AV28LoteNumQuadraPar", "vLOTENUMQUADRAPAR", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV37DescLote", "vDESCLOTE", 0, "char");
   this.setVCMap("AV38DescQuadra", "vDESCQUADRA", 0, "char");
   this.setVCMap("AV40DescArea", "vDESCAREA", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"A5317LoteNumQuadra", rfrProp:"Visible", gxAttId:"5317"});
   GridContainer.addRefreshingVar({rfrVar:"AV37DescLote"});
   GridContainer.addRefreshingVar({rfrVar:"AV38DescQuadra"});
   GridContainer.addRefreshingVar({rfrVar:"AV40DescArea"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaloteloteamento());
