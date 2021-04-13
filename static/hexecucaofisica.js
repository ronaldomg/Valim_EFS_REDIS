/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:17:14.0
*/
gx.evt.autoSkip = false;
gx.define('hexecucaofisica', false, function () {
   this.ServerClass =  "hexecucaofisica" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11ck2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ck2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16ck2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ck2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14ck2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ck2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19ck2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20ck2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21ck2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22ck2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24ck2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25ck2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,26,31,34,37,39,41,43,45,48,50,51,55,56,57,58,59,60,66,68,69,70];
   this.GXLastCtrlId =70;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hexecucaofisica",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2152,55,"EXECUCAOFISICADATA","","","ExecucaoFisicaData","date",0,"px",10,10,"right",null,[],2152,"ExecucaoFisicaData",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2153,56,"EXECUCAOFISICAMETA","","","ExecucaoFisicaMeta","int",0,"px",6,6,"right",null,[],2153,"ExecucaoFisicaMeta",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2154,57,"EXECUCAOFISICAETAPA","","","ExecucaoFisicaEtapa","int",0,"px",6,6,"right",null,[],2154,"ExecucaoFisicaEtapa",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",58,0,"px",17,"px","e19ck2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",59,0,"px",17,"px","e20ck2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",60,0,"px",17,"px","e21ck2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV27ConvenioId",gxold:"OV27ConvenioId",gxvar:"AV27ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV27ConvenioId,0)},c2v:function(){gx.O.AV27ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV31ConvenioDescricao",gxold:"OV31ConvenioDescricao",gxvar:"AV31ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV31ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV31ConvenioDescricao,0)},c2v:function(){gx.O.AV31ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE10",grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEXECUCAOFISICADATAIN",gxz:"ZV28ExecucaoFisicaDataIn",gxold:"OV28ExecucaoFisicaDataIn",gxvar:"AV28ExecucaoFisicaDataIn",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ExecucaoFisicaDataIn=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28ExecucaoFisicaDataIn=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vEXECUCAOFISICADATAIN",gx.O.AV28ExecucaoFisicaDataIn,0)},c2v:function(){gx.O.AV28ExecucaoFisicaDataIn=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vEXECUCAOFISICADATAIN")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEXECUCAOFISICADATAFI",gxz:"ZV29ExecucaoFisicaDataFi",gxold:"OV29ExecucaoFisicaDataFi",gxvar:"AV29ExecucaoFisicaDataFi",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ExecucaoFisicaDataFi=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29ExecucaoFisicaDataFi=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vEXECUCAOFISICADATAFI",gx.O.AV29ExecucaoFisicaDataFi,0)},c2v:function(){gx.O.AV29ExecucaoFisicaDataFi=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vEXECUCAOFISICADATAFI")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TABLE4",grid:0};
   GXValidFnc[34]={fld:"TABLE1",grid:0};
   GXValidFnc[37]={fld:"IMAGE2",grid:0};
   GXValidFnc[39]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[41]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[43]={fld:"BTNHELP",grid:0};
   GXValidFnc[45]={fld:"TABLE5",grid:0};
   GXValidFnc[48]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAOFISICADATA",gxz:"Z2152ExecucaoFisicaData",gxold:"O2152ExecucaoFisicaData",gxvar:"A2152ExecucaoFisicaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2152ExecucaoFisicaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2152ExecucaoFisicaData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("EXECUCAOFISICADATA",row || gx.fn.currentGridRowImpl(54),gx.O.A2152ExecucaoFisicaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2152ExecucaoFisicaData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("EXECUCAOFISICADATA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAMETA",gxz:"Z2153ExecucaoFisicaMeta",gxold:"O2153ExecucaoFisicaMeta",gxvar:"A2153ExecucaoFisicaMeta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2153ExecucaoFisicaMeta=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2153ExecucaoFisicaMeta=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EXECUCAOFISICAMETA",row || gx.fn.currentGridRowImpl(54),gx.O.A2153ExecucaoFisicaMeta,0)},c2v:function(){gx.O.A2153ExecucaoFisicaMeta=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EXECUCAOFISICAMETA",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EXECUCAOFISICAETAPA",gxz:"Z2154ExecucaoFisicaEtapa",gxold:"O2154ExecucaoFisicaEtapa",gxvar:"A2154ExecucaoFisicaEtapa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2154ExecucaoFisicaEtapa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2154ExecucaoFisicaEtapa=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EXECUCAOFISICAETAPA",row || gx.fn.currentGridRowImpl(54),gx.O.A2154ExecucaoFisicaEtapa,0)},c2v:function(){gx.O.A2154ExecucaoFisicaEtapa=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EXECUCAOFISICAETAPA",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(54),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(54),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(54))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(54))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"JS", format:2,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACONVENIO",gxz:"ZV30EmpresaConvenio",gxold:"OV30EmpresaConvenio",gxvar:"AV30EmpresaConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EmpresaConvenio=Value},v2z:function(Value){gx.O.ZV30EmpresaConvenio=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONVENIO",gx.O.AV30EmpresaConvenio,0)},c2v:function(){gx.O.AV30EmpresaConvenio=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONVENIO")},nac:gx.falseFn};
   GXValidFnc[70]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV27ConvenioId = 0 ;
   this.ZV27ConvenioId = 0 ;
   this.OV27ConvenioId = 0 ;
   this.AV31ConvenioDescricao = "" ;
   this.ZV31ConvenioDescricao = "" ;
   this.OV31ConvenioDescricao = "" ;
   this.AV28ExecucaoFisicaDataIn = gx.date.nullDate() ;
   this.ZV28ExecucaoFisicaDataIn = gx.date.nullDate() ;
   this.OV28ExecucaoFisicaDataIn = gx.date.nullDate() ;
   this.AV29ExecucaoFisicaDataFi = gx.date.nullDate() ;
   this.ZV29ExecucaoFisicaDataFi = gx.date.nullDate() ;
   this.OV29ExecucaoFisicaDataFi = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2152ExecucaoFisicaData = gx.date.nullDate() ;
   this.O2152ExecucaoFisicaData = gx.date.nullDate() ;
   this.Z2153ExecucaoFisicaMeta = 0 ;
   this.O2153ExecucaoFisicaMeta = 0 ;
   this.Z2154ExecucaoFisicaEtapa = 0 ;
   this.O2154ExecucaoFisicaEtapa = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV30EmpresaConvenio = "" ;
   this.ZV30EmpresaConvenio = "" ;
   this.OV30EmpresaConvenio = "" ;
   this.AV27ConvenioId = 0 ;
   this.AV31ConvenioDescricao = "" ;
   this.AV28ExecucaoFisicaDataIn = gx.date.nullDate() ;
   this.AV29ExecucaoFisicaDataFi = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV30EmpresaConvenio = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2152ExecucaoFisicaData = gx.date.nullDate() ;
   this.A2153ExecucaoFisicaMeta = 0 ;
   this.A2154ExecucaoFisicaEtapa = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.Events = {"e11ck2_client": ["'ANTERIOR'", true] ,"e12ck2_client": ["'PROXIMO'", true] ,"e16ck2_client": ["VPAGINA.CLICK", true] ,"e13ck2_client": ["'NOVO'", true] ,"e14ck2_client": ["'FECHAR'", true] ,"e15ck2_client": ["'PROCURAR'", true] ,"e19ck2_client": ["'ALTERAR'", true] ,"e20ck2_client": ["'EXCLUIR'", true] ,"e21ck2_client": ["'CONSULTAR'", true] ,"e22ck2_client": ["'ATUALIZAPAGINA'", true] ,"e24ck2_client": ["ENTER", true] ,"e25ck2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'EXECUCAOFISICADATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EXECUCAOFISICADATA","Title")',ctrl:'EXECUCAOFISICADATA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'EXECUCAOFISICAMETA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EXECUCAOFISICAMETA","Title")',ctrl:'EXECUCAOFISICAMETA',prop:'Title'},{ctrl:'EXECUCAOFISICAETAPA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EXECUCAOFISICAETAPA","Title")',ctrl:'EXECUCAOFISICAETAPA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV34tpErro',fld:'vTPERRO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'A2152ExecucaoFisicaData',fld:'EXECUCAOFISICADATA'},{av:'A2153ExecucaoFisicaMeta',fld:'EXECUCAOFISICAMETA'},{av:'A2154ExecucaoFisicaEtapa',fld:'EXECUCAOFISICAETAPA'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'A2154ExecucaoFisicaEtapa',fld:'EXECUCAOFISICAETAPA'},{av:'A2153ExecucaoFisicaMeta',fld:'EXECUCAOFISICAMETA'},{av:'A2152ExecucaoFisicaData',fld:'EXECUCAOFISICADATA'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV34tpErro',fld:'vTPERRO'},{av:'AV46GXLvl236',fld:'vGXLVL236'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34tpErro',fld:'vTPERRO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34tpErro',fld:'vTPERRO'},{av:'AV46GXLvl236',fld:'vGXLVL236'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'A2152ExecucaoFisicaData',fld:'EXECUCAOFISICADATA'},{av:'A2153ExecucaoFisicaMeta',fld:'EXECUCAOFISICAMETA'},{av:'A2154ExecucaoFisicaEtapa',fld:'EXECUCAOFISICAETAPA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'}],[{av:'A2154ExecucaoFisicaEtapa',fld:'EXECUCAOFISICAETAPA'},{av:'A2153ExecucaoFisicaMeta',fld:'EXECUCAOFISICAMETA'},{av:'A2152ExecucaoFisicaData',fld:'EXECUCAOFISICADATA'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'A2152ExecucaoFisicaData',fld:'EXECUCAOFISICADATA'},{av:'A2153ExecucaoFisicaMeta',fld:'EXECUCAOFISICAMETA'},{av:'A2154ExecucaoFisicaEtapa',fld:'EXECUCAOFISICAETAPA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'}],[{av:'A2154ExecucaoFisicaEtapa',fld:'EXECUCAOFISICAETAPA'},{av:'A2153ExecucaoFisicaMeta',fld:'EXECUCAOFISICAMETA'},{av:'A2152ExecucaoFisicaData',fld:'EXECUCAOFISICADATA'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'A2152ExecucaoFisicaData',fld:'EXECUCAOFISICADATA'},{av:'A2153ExecucaoFisicaMeta',fld:'EXECUCAOFISICAMETA'},{av:'A2154ExecucaoFisicaEtapa',fld:'EXECUCAOFISICAETAPA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'}],[{av:'A2154ExecucaoFisicaEtapa',fld:'EXECUCAOFISICAETAPA'},{av:'A2153ExecucaoFisicaMeta',fld:'EXECUCAOFISICAMETA'},{av:'A2152ExecucaoFisicaData',fld:'EXECUCAOFISICADATA'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ExecucaoFisicaDataIn',fld:'vEXECUCAOFISICADATAIN'},{av:'AV29ExecucaoFisicaDataFi',fld:'vEXECUCAOFISICADATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setPrompt("PROMPT_CONVENIOID", [13]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hexecucaofisica());
