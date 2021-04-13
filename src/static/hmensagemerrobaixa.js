/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:14.1
*/
gx.evt.autoSkip = false;
gx.define('hmensagemerrobaixa', false, function () {
   this.ServerClass =  "hmensagemerrobaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e11wj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14wj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e15wj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7,12,14,15,16,17,18];
   this.GXLastCtrlId =18;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",13,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hmensagemerrobaixa",[],false,1,false,true,0,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Numeroconta",14,"vNUMEROCONTA","Conta","","NumeroConta","int",0,"px",8,8,"right",null,[],"Numeroconta","NumeroConta",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Nomecliente",15,"vNOMECLIENTE","Nome do Cliente/Fornecedor","","NomeCliente","svchar",0,"px",60,60,"left",null,[],"Nomecliente","NomeCliente",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Numerodoc",16,"vNUMERODOC","Documento","","NumeroDoc","svchar",0,"px",20,20,"left",null,[],"Numerodoc","NumeroDoc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Valorconta",17,"vVALORCONTA","Valor","","ValorConta","decimal",0,"px",22,22,"right",null,[],"Valorconta","ValorConta",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[7]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[12]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[14]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:13,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNUMEROCONTA",gxz:"ZV12NumeroConta",gxold:"OV12NumeroConta",gxvar:"AV12NumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV12NumeroConta=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12NumeroConta=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNUMEROCONTA",row || gx.fn.currentGridRowImpl(13),gx.O.AV12NumeroConta,0)},c2v:function(){gx.O.AV12NumeroConta=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNUMEROCONTA",row || gx.fn.currentGridRowImpl(13),'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:13,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNOMECLIENTE",gxz:"ZV14NomeCliente",gxold:"OV14NomeCliente",gxvar:"AV14NomeCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV14NomeCliente=Value},v2z:function(Value){gx.O.ZV14NomeCliente=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMECLIENTE",row || gx.fn.currentGridRowImpl(13),gx.O.AV14NomeCliente,0)},c2v:function(){gx.O.AV14NomeCliente=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMECLIENTE",row || gx.fn.currentGridRowImpl(13))},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:13,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNUMERODOC",gxz:"ZV13NumeroDoc",gxold:"OV13NumeroDoc",gxvar:"AV13NumeroDoc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV13NumeroDoc=Value},v2z:function(Value){gx.O.ZV13NumeroDoc=Value},v2c:function(row){gx.fn.setGridControlValue("vNUMERODOC",row || gx.fn.currentGridRowImpl(13),gx.O.AV13NumeroDoc,0)},c2v:function(){gx.O.AV13NumeroDoc=this.val()},val:function(row){return gx.fn.getGridControlValue("vNUMERODOC",row || gx.fn.currentGridRowImpl(13))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:13,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCONTA",gxz:"ZV15ValorConta",gxold:"OV15ValorConta",gxvar:"AV15ValorConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15ValorConta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV15ValorConta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORCONTA",row || gx.fn.currentGridRowImpl(13),gx.O.AV15ValorConta,2,',')},c2v:function(){gx.O.AV15ValorConta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORCONTA",row || gx.fn.currentGridRowImpl(13),'.',',')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"DIV2", format:2,grid:0};
   this.ZV12NumeroConta = 0 ;
   this.OV12NumeroConta = 0 ;
   this.ZV14NomeCliente = "" ;
   this.OV14NomeCliente = "" ;
   this.ZV13NumeroDoc = "" ;
   this.OV13NumeroDoc = "" ;
   this.ZV15ValorConta = 0 ;
   this.OV15ValorConta = 0 ;
   this.AV12NumeroConta = 0 ;
   this.AV14NomeCliente = "" ;
   this.AV13NumeroDoc = "" ;
   this.AV15ValorConta = 0 ;
   this.Events = {"e11wj2_client": ["'FECHAR'", true] ,"e14wj2_client": ["ENTER", true] ,"e15wj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1.LOAD"] = [[],[{av:'AV16SdtBaixaCxaBco',fld:'vSDTBAIXACXABCO'},{av:'AV24GXV1',fld:'vGXV1'},{av:'AV17SdtBaixaCxaBcoItem',fld:'vSDTBAIXACXABCOITEM'},{av:'AV25GXV2',fld:'vGXV2'},{av:'AV18SdtBaixaCxaBcoLanc',fld:'vSDTBAIXACXABCOLANC'},{av:'AV26GXV3',fld:'vGXV3'},{av:'AV19SdtBaixaCxaBcoConta',fld:'vSDTBAIXACXABCOCONTA'},{av:'AV12NumeroConta',fld:'vNUMEROCONTA'},{av:'AV15ValorConta',fld:'vVALORCONTA'},{av:'AV14NomeCliente',fld:'vNOMECLIENTE'},{av:'AV13NumeroDoc',fld:'vNUMERODOC'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'}],[]];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmensagemerrobaixa());
