/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:59:22.67
*/
gx.evt.autoSkip = false;
gx.define('hconsultacentrocusto', false, function () {
   this.ServerClass =  "hconsultacentrocusto" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV21CentroCustoIdParm=gx.fn.getControlValue("vCENTROCUSTOIDPARM") ;
      this.AV22SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.A2105ConvenioCentroCustoEmpId=gx.fn.getControlValue("CONVENIOCENTROCUSTOEMPID") ;
      this.A2106ConvenioCentroCustoId=gx.fn.getControlValue("CONVENIOCENTROCUSTOID") ;
      this.AV25CentroCustoIdFiltro=gx.fn.getControlValue("vCENTROCUSTOIDFILTRO") ;
      this.A2108ConvenioCCusNatDesUsuarioAlt=gx.fn.getControlValue("CONVENIOCCUSNATDESUSUARIOALT") ;
      this.A2098ConvenioCCusNatDesDescricao=gx.fn.getControlValue("CONVENIOCCUSNATDESDESCRICAO") ;
      this.AV16PCentroCustoId=gx.fn.getControlValue("vPCENTROCUSTOID") ;
   };
   this.e220w2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hcentrocustosuperior",[this.A153EmpresaCentroCustoEmpresaId, this.A51CentroCustoId]), []);
      this.refreshOutputs([]);
   };
   this.e230w2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hultimocentrocusto",[this.A153EmpresaCentroCustoEmpresaId, this.A150CentroCustoSuperior]), []);
      this.refreshOutputs([]);
   };
   this.e190w2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e120w2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e130w2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e140w2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e150w2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e160w2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e110w2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e210w2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e240w1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,34,35,36,42,45,48,50,52,54,56,57,58,59,60];
   this.GXLastCtrlId =60;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacentrocusto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(51,29,"CENTROCUSTOID","","","CentroCustoId","svchar",0,"px",30,30,"left",null,[],51,"CentroCustoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(52,30,"CENTROCUSTODESCRICAO","","","CentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],52,"CentroCustoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(150,31,"CENTROCUSTOSUPERIOR","","","CentroCustoSuperior","svchar",0,"px",30,30,"left",null,[],150,"CentroCustoSuperior",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Convenioccusnatdesdescricao",32,"vCONVENIOCCUSNATDESDESCRICAO","Natureza Despesa","","ConvenioCCusNatDesDescricao","svchar",0,"px",40,40,"left",null,[],"Convenioccusnatdesdescricao","ConvenioCCusNatDesDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(10501,33,"CENTROCUSTOTPCLASSIFICDESC","Classificação","","CentroCustoTpClassificDesc","svchar",0,"px",35,35,"left",null,[],10501,"CentroCustoTpClassificDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpsup","vBMPSUP",34,0,"px",17,"px","e220w2_client","","Sup.","Image","");
   GridContainer.addBitmap("&Bmpult","vBMPULT",35,0,"px",17,"px","e230w2_client","","Últ.","Image","");
   GridContainer.addSingleLineEdit(153,36,"EMPRESACENTROCUSTOEMPRESAID","Código Empresa Centro Custo","","EmpresaCentroCustoEmpresaId","char",0,"px",10,10,"left",null,[],153,"EmpresaCentroCustoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCENTROCUSTOID",gxz:"ZV13CentroCustoId",gxold:"OV13CentroCustoId",gxvar:"AV13CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13CentroCustoId=Value},v2z:function(Value){gx.O.ZV13CentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOID",gx.O.AV13CentroCustoId,0)},c2v:function(){gx.O.AV13CentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCENTROCUSTOSUPERIOR",gxz:"ZV15CentroCustoSuperior",gxold:"OV15CentroCustoSuperior",gxvar:"AV15CentroCustoSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15CentroCustoSuperior=Value},v2z:function(Value){gx.O.ZV15CentroCustoSuperior=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOSUPERIOR",gx.O.AV15CentroCustoSuperior,0)},c2v:function(){gx.O.AV15CentroCustoSuperior=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOSUPERIOR")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV14CentroCustoDescricao",gxold:"OV14CentroCustoDescricao",gxvar:"AV14CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV14CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV14CentroCustoDescricao,0)},c2v:function(){gx.O.AV14CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOID",gxz:"Z51CentroCustoId",gxold:"O51CentroCustoId",gxvar:"A51CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A51CentroCustoId=Value},v2z:function(Value){gx.O.Z51CentroCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(28),gx.O.A51CentroCustoId,0)},c2v:function(){gx.O.A51CentroCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTODESCRICAO",gxz:"Z52CentroCustoDescricao",gxold:"O52CentroCustoDescricao",gxvar:"A52CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A52CentroCustoDescricao=Value},v2z:function(Value){gx.O.Z52CentroCustoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.A52CentroCustoDescricao,0)},c2v:function(){gx.O.A52CentroCustoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOSUPERIOR",gxz:"Z150CentroCustoSuperior",gxold:"O150CentroCustoSuperior",gxvar:"A150CentroCustoSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A150CentroCustoSuperior=Value},v2z:function(Value){gx.O.Z150CentroCustoSuperior=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOSUPERIOR",row || gx.fn.currentGridRowImpl(28),gx.O.A150CentroCustoSuperior,0)},c2v:function(){gx.O.A150CentroCustoSuperior=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOSUPERIOR",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIOCCUSNATDESDESCRICAO",gxz:"ZV23ConvenioCCusNatDesDescricao",gxold:"OV23ConvenioCCusNatDesDescricao",gxvar:"AV23ConvenioCCusNatDesDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23ConvenioCCusNatDesDescricao=Value},v2z:function(Value){gx.O.ZV23ConvenioCCusNatDesDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vCONVENIOCCUSNATDESDESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.AV23ConvenioCCusNatDesDescricao,0)},c2v:function(){gx.O.AV23ConvenioCCusNatDesDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONVENIOCCUSNATDESDESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOTPCLASSIFICDESC",gxz:"Z10501CentroCustoTpClassificDesc",gxold:"O10501CentroCustoTpClassificDesc",gxvar:"A10501CentroCustoTpClassificDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10501CentroCustoTpClassificDesc=Value},v2z:function(Value){gx.O.Z10501CentroCustoTpClassificDesc=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOTPCLASSIFICDESC",row || gx.fn.currentGridRowImpl(28),gx.O.A10501CentroCustoTpClassificDesc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10501CentroCustoTpClassificDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOTPCLASSIFICDESC",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSUP",gxz:"ZV19bmpSup",gxold:"OV19bmpSup",gxvar:"AV19bmpSup",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV19bmpSup=Value},v2z:function(Value){gx.O.ZV19bmpSup=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSUP",row || gx.fn.currentGridRowImpl(28),gx.O.AV19bmpSup,gx.O.AV32Bmpsup_GXI)},c2v:function(){gx.O.AV32Bmpsup_GXI=this.val_GXI();gx.O.AV19bmpSup=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSUP",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSUP_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV32Bmpsup_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPULT",gxz:"ZV20bmpUlt",gxold:"OV20bmpUlt",gxvar:"AV20bmpUlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpUlt=Value},v2z:function(Value){gx.O.ZV20bmpUlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPULT",row || gx.fn.currentGridRowImpl(28),gx.O.AV20bmpUlt,gx.O.AV33Bmpult_GXI)},c2v:function(){gx.O.AV33Bmpult_GXI=this.val_GXI();gx.O.AV20bmpUlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPULT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPULT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV33Bmpult_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACENTROCUSTOEMPRESAID",gxz:"Z153EmpresaCentroCustoEmpresaId",gxold:"O153EmpresaCentroCustoEmpresaId",gxvar:"A153EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A153EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.Z153EmpresaCentroCustoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACENTROCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(28),gx.O.A153EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.A153EmpresaCentroCustoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACENTROCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLENAV",grid:0};
   GXValidFnc[45]={fld:"IMGADD",grid:0};
   GXValidFnc[48]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[50]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[52]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[54]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[56]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[57]={fld:"JS", format:2,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV27PaginaAux",gxold:"OV27PaginaAux",gxvar:"AV27PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV27PaginaAux,0)},c2v:function(){gx.O.AV27PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV26Pagina",gxold:"OV26Pagina",gxvar:"AV26Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV26Pagina)},c2v:function(){gx.O.AV26Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV13CentroCustoId = "" ;
   this.ZV13CentroCustoId = "" ;
   this.OV13CentroCustoId = "" ;
   this.AV15CentroCustoSuperior = "" ;
   this.ZV15CentroCustoSuperior = "" ;
   this.OV15CentroCustoSuperior = "" ;
   this.AV14CentroCustoDescricao = "" ;
   this.ZV14CentroCustoDescricao = "" ;
   this.OV14CentroCustoDescricao = "" ;
   this.Z51CentroCustoId = "" ;
   this.O51CentroCustoId = "" ;
   this.Z52CentroCustoDescricao = "" ;
   this.O52CentroCustoDescricao = "" ;
   this.Z150CentroCustoSuperior = "" ;
   this.O150CentroCustoSuperior = "" ;
   this.ZV23ConvenioCCusNatDesDescricao = "" ;
   this.OV23ConvenioCCusNatDesDescricao = "" ;
   this.Z10501CentroCustoTpClassificDesc = "" ;
   this.O10501CentroCustoTpClassificDesc = "" ;
   this.ZV19bmpSup = "" ;
   this.OV19bmpSup = "" ;
   this.ZV20bmpUlt = "" ;
   this.OV20bmpUlt = "" ;
   this.Z153EmpresaCentroCustoEmpresaId = "" ;
   this.O153EmpresaCentroCustoEmpresaId = "" ;
   this.AV27PaginaAux = 0 ;
   this.ZV27PaginaAux = 0 ;
   this.OV27PaginaAux = 0 ;
   this.AV26Pagina = 0 ;
   this.ZV26Pagina = 0 ;
   this.OV26Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV13CentroCustoId = "" ;
   this.AV15CentroCustoSuperior = "" ;
   this.AV14CentroCustoDescricao = "" ;
   this.AV27PaginaAux = 0 ;
   this.AV26Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV16PCentroCustoId = "" ;
   this.AV21CentroCustoIdParm = "" ;
   this.A10499CentroCustoTpClassificempid = "" ;
   this.A10500CentroCustoTpClassificId = 0 ;
   this.A51CentroCustoId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A150CentroCustoSuperior = "" ;
   this.AV23ConvenioCCusNatDesDescricao = "" ;
   this.A10501CentroCustoTpClassificDesc = "" ;
   this.AV19bmpSup = "" ;
   this.AV20bmpUlt = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A2106ConvenioCentroCustoId = "" ;
   this.A2105ConvenioCentroCustoEmpId = "" ;
   this.A2108ConvenioCCusNatDesUsuarioAlt = "" ;
   this.A2098ConvenioCCusNatDesDescricao = "" ;
   this.A2096ConvenioCCusNatDesEmpId = "" ;
   this.A2097ConvenioCCusNatDesId = 0 ;
   this.A140SistemaId = "" ;
   this.A138EmpresaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22SnParametro = "" ;
   this.AV25CentroCustoIdFiltro = "" ;
   this.Events = {"e190w2_client": ["ENTER", true] ,"e120w2_client": ["'GXM_FIRST'", true] ,"e130w2_client": ["'GXM_PREVIOUS'", true] ,"e140w2_client": ["'GXM_NEXT'", true] ,"e150w2_client": ["'GXM_LAST'", true] ,"e160w2_client": ["'PROCURAR'", true] ,"e110w2_client": ["'NOVO'", true] ,"e210w2_client": ["'ATUALIZAPAGINA'", true] ,"e240w1_client": ["CANCEL", true] ,"e220w2_client": ["'SUPERIOR'", false] ,"e230w2_client": ["'ULTIMO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV15CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV14CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'AV20bmpUlt',fld:'vBMPULT'},{av:'gx.fn.getCtrlProperty("vBMPULT","Tooltiptext")',ctrl:'vBMPULT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCONVENIOCCUSNATDESDESCRICAO","Visible")',ctrl:'vCONVENIOCCUSNATDESDESCRICAO',prop:'Visible'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV25CentroCustoIdFiltro',fld:'vCENTROCUSTOIDFILTRO'},{av:'A2108ConvenioCCusNatDesUsuarioAlt',fld:'CONVENIOCCUSNATDESUSUARIOALT'},{av:'A2098ConvenioCCusNatDesDescricao',fld:'CONVENIOCCUSNATDESDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21CentroCustoIdParm',fld:'vCENTROCUSTOIDPARM',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV13CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV15CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV14CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{ctrl:'CENTROCUSTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CENTROCUSTOID","Title")',ctrl:'CENTROCUSTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CENTROCUSTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CENTROCUSTODESCRICAO","Title")',ctrl:'CENTROCUSTODESCRICAO',prop:'Title'},{ctrl:'CENTROCUSTOSUPERIOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CENTROCUSTOSUPERIOR","Title")',ctrl:'CENTROCUSTOSUPERIOR',prop:'Title'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV28NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV25CentroCustoIdFiltro',fld:'vCENTROCUSTOIDFILTRO'},{av:'A2108ConvenioCCusNatDesUsuarioAlt',fld:'CONVENIOCCUSNATDESUSUARIOALT'},{av:'A2098ConvenioCCusNatDesDescricao',fld:'CONVENIOCCUSNATDESDESCRICAO'}],[{av:'AV25CentroCustoIdFiltro',fld:'vCENTROCUSTOIDFILTRO'},{av:'AV24Cont',fld:'vCONT'},{av:'AV35GXLvl67',fld:'vGXLVL67'},{av:'AV23ConvenioCCusNatDesDescricao',fld:'vCONVENIOCCUSNATDESDESCRICAO'}]];
   this.EvtParms["ENTER"] = [[{av:'A51CentroCustoId',fld:'CENTROCUSTOID'}],[{av:'AV16PCentroCustoId',fld:'vPCENTROCUSTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV15CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV14CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'AV20bmpUlt',fld:'vBMPULT'},{av:'gx.fn.getCtrlProperty("vBMPULT","Tooltiptext")',ctrl:'vBMPULT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCONVENIOCCUSNATDESDESCRICAO","Visible")',ctrl:'vCONVENIOCCUSNATDESDESCRICAO',prop:'Visible'},{av:'AV21CentroCustoIdParm',fld:'vCENTROCUSTOIDPARM',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV25CentroCustoIdFiltro',fld:'vCENTROCUSTOIDFILTRO'},{av:'A2108ConvenioCCusNatDesUsuarioAlt',fld:'CONVENIOCCUSNATDESUSUARIOALT'},{av:'A2098ConvenioCCusNatDesDescricao',fld:'CONVENIOCCUSNATDESDESCRICAO'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV15CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV14CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'AV20bmpUlt',fld:'vBMPULT'},{av:'gx.fn.getCtrlProperty("vBMPULT","Tooltiptext")',ctrl:'vBMPULT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCONVENIOCCUSNATDESDESCRICAO","Visible")',ctrl:'vCONVENIOCCUSNATDESDESCRICAO',prop:'Visible'},{av:'AV21CentroCustoIdParm',fld:'vCENTROCUSTOIDPARM',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV25CentroCustoIdFiltro',fld:'vCENTROCUSTOIDFILTRO'},{av:'A2108ConvenioCCusNatDesUsuarioAlt',fld:'CONVENIOCCUSNATDESUSUARIOALT'},{av:'A2098ConvenioCCusNatDesDescricao',fld:'CONVENIOCCUSNATDESDESCRICAO'},{av:'AV26Pagina',fld:'vPAGINA'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV15CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV14CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'AV20bmpUlt',fld:'vBMPULT'},{av:'gx.fn.getCtrlProperty("vBMPULT","Tooltiptext")',ctrl:'vBMPULT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCONVENIOCCUSNATDESDESCRICAO","Visible")',ctrl:'vCONVENIOCCUSNATDESDESCRICAO',prop:'Visible'},{av:'AV21CentroCustoIdParm',fld:'vCENTROCUSTOIDPARM',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV25CentroCustoIdFiltro',fld:'vCENTROCUSTOIDFILTRO'},{av:'A2108ConvenioCCusNatDesUsuarioAlt',fld:'CONVENIOCCUSNATDESUSUARIOALT'},{av:'A2098ConvenioCCusNatDesDescricao',fld:'CONVENIOCCUSNATDESDESCRICAO'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV15CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV14CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'AV20bmpUlt',fld:'vBMPULT'},{av:'gx.fn.getCtrlProperty("vBMPULT","Tooltiptext")',ctrl:'vBMPULT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCONVENIOCCUSNATDESDESCRICAO","Visible")',ctrl:'vCONVENIOCCUSNATDESDESCRICAO',prop:'Visible'},{av:'AV21CentroCustoIdParm',fld:'vCENTROCUSTOIDPARM',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV25CentroCustoIdFiltro',fld:'vCENTROCUSTOIDFILTRO'},{av:'A2108ConvenioCCusNatDesUsuarioAlt',fld:'CONVENIOCCUSNATDESUSUARIOALT'},{av:'A2098ConvenioCCusNatDesDescricao',fld:'CONVENIOCCUSNATDESDESCRICAO'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV15CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV14CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'AV20bmpUlt',fld:'vBMPULT'},{av:'gx.fn.getCtrlProperty("vBMPULT","Tooltiptext")',ctrl:'vBMPULT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCONVENIOCCUSNATDESDESCRICAO","Visible")',ctrl:'vCONVENIOCCUSNATDESDESCRICAO',prop:'Visible'},{av:'AV21CentroCustoIdParm',fld:'vCENTROCUSTOIDPARM',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV25CentroCustoIdFiltro',fld:'vCENTROCUSTOIDFILTRO'},{av:'A2108ConvenioCCusNatDesUsuarioAlt',fld:'CONVENIOCCUSNATDESUSUARIOALT'},{av:'A2098ConvenioCCusNatDesDescricao',fld:'CONVENIOCCUSNATDESDESCRICAO'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'SUPERIOR'"] = [[{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'}],[]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ULTIMO'"] = [[{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'A150CentroCustoSuperior',fld:'CENTROCUSTOSUPERIOR'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV13CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV15CentroCustoSuperior',fld:'vCENTROCUSTOSUPERIOR'},{av:'AV14CentroCustoDescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV19bmpSup',fld:'vBMPSUP'},{av:'gx.fn.getCtrlProperty("vBMPSUP","Tooltiptext")',ctrl:'vBMPSUP',prop:'Tooltiptext'},{av:'AV20bmpUlt',fld:'vBMPULT'},{av:'gx.fn.getCtrlProperty("vBMPULT","Tooltiptext")',ctrl:'vBMPULT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vCONVENIOCCUSNATDESDESCRICAO","Visible")',ctrl:'vCONVENIOCCUSNATDESDESCRICAO',prop:'Visible'},{av:'AV21CentroCustoIdParm',fld:'vCENTROCUSTOIDPARM',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV25CentroCustoIdFiltro',fld:'vCENTROCUSTOIDFILTRO'},{av:'A2108ConvenioCCusNatDesUsuarioAlt',fld:'CONVENIOCCUSNATDESUSUARIOALT'},{av:'A2098ConvenioCCusNatDesDescricao',fld:'CONVENIOCCUSNATDESDESCRICAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV21CentroCustoIdParm", "vCENTROCUSTOIDPARM", 0, "svchar");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("A2105ConvenioCentroCustoEmpId", "CONVENIOCENTROCUSTOEMPID", 0, "char");
   this.setVCMap("A2106ConvenioCentroCustoId", "CONVENIOCENTROCUSTOID", 0, "svchar");
   this.setVCMap("AV25CentroCustoIdFiltro", "vCENTROCUSTOIDFILTRO", 0, "svchar");
   this.setVCMap("A2108ConvenioCCusNatDesUsuarioAlt", "CONVENIOCCUSNATDESUSUARIOALT", 0, "char");
   this.setVCMap("A2098ConvenioCCusNatDesDescricao", "CONVENIOCCUSNATDESDESCRICAO", 0, "svchar");
   this.setVCMap("AV16PCentroCustoId", "vPCENTROCUSTOID", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV21CentroCustoIdParm", "vCENTROCUSTOIDPARM", 0, "svchar");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("A2105ConvenioCentroCustoEmpId", "CONVENIOCENTROCUSTOEMPID", 0, "char");
   this.setVCMap("A2106ConvenioCentroCustoId", "CONVENIOCENTROCUSTOID", 0, "svchar");
   this.setVCMap("AV25CentroCustoIdFiltro", "vCENTROCUSTOIDFILTRO", 0, "svchar");
   this.setVCMap("A2108ConvenioCCusNatDesUsuarioAlt", "CONVENIOCCUSNATDESUSUARIOALT", 0, "char");
   this.setVCMap("A2098ConvenioCCusNatDesDescricao", "CONVENIOCCUSNATDESDESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpSup", rfrProp:"Value", gxAttId:"Bmpsup"});
   GridContainer.addRefreshingVar({rfrVar:"AV19bmpSup", rfrProp:"Tooltiptext", gxAttId:"Bmpsup"});
   GridContainer.addRefreshingVar({rfrVar:"AV20bmpUlt", rfrProp:"Value", gxAttId:"Bmpult"});
   GridContainer.addRefreshingVar({rfrVar:"AV20bmpUlt", rfrProp:"Tooltiptext", gxAttId:"Bmpult"});
   GridContainer.addRefreshingVar({rfrVar:"AV23ConvenioCCusNatDesDescricao", rfrProp:"Visible", gxAttId:"Convenioccusnatdesdescricao"});
   GridContainer.addRefreshingVar({rfrVar:"AV21CentroCustoIdParm"});
   GridContainer.addRefreshingVar({rfrVar:"AV22SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A51CentroCustoId", rfrProp:"Value", gxAttId:"51"});
   GridContainer.addRefreshingVar({rfrVar:"A2105ConvenioCentroCustoEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A2106ConvenioCentroCustoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV25CentroCustoIdFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2108ConvenioCCusNatDesUsuarioAlt"});
   GridContainer.addRefreshingVar({rfrVar:"A2098ConvenioCCusNatDesDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacentrocusto());
