/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:7:37.65
*/
gx.evt.autoSkip = false;
gx.define('htrntransf', false, function () {
   this.ServerClass =  "htrntransf" ;
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
   };
   this.e119b2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e129b2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e169b2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e139b2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e149b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e159b2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e209b2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e219b2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e229b2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e239b2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,55,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htrntransf",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1415,47,"TRNTRANSFSIGLA","","","TrnTransfSigla","char",0,"px",8,8,"left",null,[],1415,"TrnTransfSigla",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1370,48,"TRNTRANSFDESCRICAO","","","TrnTransfDescricao","svchar",0,"px",35,35,"left",null,[],1370,"TrnTransfDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1396,49,"TRNTRANSFCAIBANDEBDESCRICAO","","","TrnTransfCaiBanDebDescricao","svchar",0,"px",25,25,"left",null,[],1396,"TrnTransfCaiBanDebDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1378,50,"TRNTRANSFCAIBANCREDESCRICAO","","","TrnTransfCaiBanCreDescricao","svchar",0,"px",25,25,"left",null,[],1378,"TrnTransfCaiBanCreDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmptrntransf","vBMPTRNTRANSF",51,0,"px",17,"px","e219b2_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",52,0,"px",17,"px",null,"","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",53,0,"px",17,"px",null,"","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",54,0,"px",17,"px",null,"","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1414,55,"TRNTRANSFEMPRESAID","Empresa","","TrnTransfEmpresaID","char",0,"px",10,10,"left",null,[],1414,"TrnTransfEmpresaID",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRNTRANSFSIGLA",gxz:"ZV27TrnTransfSigla",gxold:"OV27TrnTransfSigla",gxvar:"AV27TrnTransfSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TrnTransfSigla=Value},v2z:function(Value){gx.O.ZV27TrnTransfSigla=Value},v2c:function(){gx.fn.setControlValue("vTRNTRANSFSIGLA",gx.O.AV27TrnTransfSigla,0)},c2v:function(){gx.O.AV27TrnTransfSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRNTRANSFSIGLA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRNTRANSFDESCRICAO",gxz:"ZV28TrnTransfDescricao",gxold:"OV28TrnTransfDescricao",gxvar:"AV28TrnTransfDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TrnTransfDescricao=Value},v2z:function(Value){gx.O.ZV28TrnTransfDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRNTRANSFDESCRICAO",gx.O.AV28TrnTransfDescricao,0)},c2v:function(){gx.O.AV28TrnTransfDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRNTRANSFDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE8",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFSIGLA",gxz:"Z1415TrnTransfSigla",gxold:"O1415TrnTransfSigla",gxvar:"A1415TrnTransfSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1415TrnTransfSigla=Value},v2z:function(Value){gx.O.Z1415TrnTransfSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFSIGLA",row || gx.fn.currentGridRowImpl(46),gx.O.A1415TrnTransfSigla,0)},c2v:function(){gx.O.A1415TrnTransfSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFSIGLA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFDESCRICAO",gxz:"Z1370TrnTransfDescricao",gxold:"O1370TrnTransfDescricao",gxvar:"A1370TrnTransfDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1370TrnTransfDescricao=Value},v2z:function(Value){gx.O.Z1370TrnTransfDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFDESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1370TrnTransfDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1370TrnTransfDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFDESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFCAIBANDEBDESCRICAO",gxz:"Z1396TrnTransfCaiBanDebDescricao",gxold:"O1396TrnTransfCaiBanDebDescricao",gxvar:"A1396TrnTransfCaiBanDebDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1396TrnTransfCaiBanDebDescricao=Value},v2z:function(Value){gx.O.Z1396TrnTransfCaiBanDebDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFCAIBANDEBDESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1396TrnTransfCaiBanDebDescricao,0)},c2v:function(){gx.O.A1396TrnTransfCaiBanDebDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFCAIBANDEBDESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFCAIBANCREDESCRICAO",gxz:"Z1378TrnTransfCaiBanCreDescricao",gxold:"O1378TrnTransfCaiBanCreDescricao",gxvar:"A1378TrnTransfCaiBanCreDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1378TrnTransfCaiBanCreDescricao=Value},v2z:function(Value){gx.O.Z1378TrnTransfCaiBanCreDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFCAIBANCREDESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1378TrnTransfCaiBanCreDescricao,0)},c2v:function(){gx.O.A1378TrnTransfCaiBanCreDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFCAIBANCREDESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPTRNTRANSF",gxz:"ZV29bmpTrnTransf",gxold:"OV29bmpTrnTransf",gxvar:"AV29bmpTrnTransf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpTrnTransf=Value},v2z:function(Value){gx.O.ZV29bmpTrnTransf=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPTRNTRANSF",row || gx.fn.currentGridRowImpl(46),gx.O.AV29bmpTrnTransf,gx.O.AV37Bmptrntransf_GXI)},c2v:function(){gx.O.AV37Bmptrntransf_GXI=this.val_GXI();gx.O.AV29bmpTrnTransf=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPTRNTRANSF",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPTRNTRANSF_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV37Bmptrntransf_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNTRANSFEMPRESAID",gxz:"Z1414TrnTransfEmpresaID",gxold:"O1414TrnTransfEmpresaID",gxvar:"A1414TrnTransfEmpresaID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1414TrnTransfEmpresaID=Value},v2z:function(Value){gx.O.Z1414TrnTransfEmpresaID=Value},v2c:function(row){gx.fn.setGridControlValue("TRNTRANSFEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1414TrnTransfEmpresaID,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1414TrnTransfEmpresaID=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNTRANSFEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TrnTransfSigla = "" ;
   this.ZV27TrnTransfSigla = "" ;
   this.OV27TrnTransfSigla = "" ;
   this.AV28TrnTransfDescricao = "" ;
   this.ZV28TrnTransfDescricao = "" ;
   this.OV28TrnTransfDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1415TrnTransfSigla = "" ;
   this.O1415TrnTransfSigla = "" ;
   this.Z1370TrnTransfDescricao = "" ;
   this.O1370TrnTransfDescricao = "" ;
   this.Z1396TrnTransfCaiBanDebDescricao = "" ;
   this.O1396TrnTransfCaiBanDebDescricao = "" ;
   this.Z1378TrnTransfCaiBanCreDescricao = "" ;
   this.O1378TrnTransfCaiBanCreDescricao = "" ;
   this.ZV29bmpTrnTransf = "" ;
   this.OV29bmpTrnTransf = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1414TrnTransfEmpresaID = "" ;
   this.O1414TrnTransfEmpresaID = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TrnTransfSigla = "" ;
   this.AV28TrnTransfDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1376TrnTransfCaiBanCreEmpresaId = "" ;
   this.A1377TrnTransfCaiBanCreId = 0 ;
   this.A1394TrnTransfCaiBanDebEmpresaId = "" ;
   this.A1395TrnTransfCaiBanDebId = 0 ;
   this.A1415TrnTransfSigla = "" ;
   this.A1370TrnTransfDescricao = "" ;
   this.A1396TrnTransfCaiBanDebDescricao = "" ;
   this.A1378TrnTransfCaiBanCreDescricao = "" ;
   this.AV29bmpTrnTransf = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1414TrnTransfEmpresaID = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.Events = {"e119b2_client": ["'ANTERIOR'", true] ,"e129b2_client": ["'PROXIMO'", true] ,"e169b2_client": ["VPAGINA.CLICK", true] ,"e139b2_client": ["'NOVO'", true] ,"e149b2_client": ["'FECHAR'", true] ,"e159b2_client": ["'PROCURAR'", true] ,"e209b2_client": ["'ATUALIZAPAGINA'", true] ,"e219b2_client": ["'DUPLICAR'", true] ,"e229b2_client": ["ENTER", true] ,"e239b2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV28TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV28TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'}],[{ctrl:'TRNTRANSFSIGLA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNTRANSFSIGLA","Title")',ctrl:'TRNTRANSFSIGLA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TRNTRANSFDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNTRANSFDESCRICAO","Title")',ctrl:'TRNTRANSFDESCRICAO',prop:'Title'},{ctrl:'TRNTRANSFCAIBANDEBDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNTRANSFCAIBANDEBDESCRICAO","Title")',ctrl:'TRNTRANSFCAIBANDEBDESCRICAO',prop:'Title'},{ctrl:'TRNTRANSFCAIBANCREDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNTRANSFCAIBANCREDESCRICAO","Title")',ctrl:'TRNTRANSFCAIBANCREDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV28TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV28TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV28TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV29bmpTrnTransf',fld:'vBMPTRNTRANSF'},{av:'gx.fn.getCtrlProperty("vBMPTRNTRANSF","Tooltiptext")',ctrl:'vBMPTRNTRANSF',prop:'Tooltiptext'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV28TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV28TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV28TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'}],[]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnTransfSigla',fld:'vTRNTRANSFSIGLA'},{av:'AV28TrnTransfDescricao',fld:'vTRNTRANSFDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1415TrnTransfSigla',fld:'TRNTRANSFSIGLA'},{av:'A1414TrnTransfEmpresaID',fld:'TRNTRANSFEMPRESAID'},{av:'A1370TrnTransfDescricao',fld:'TRNTRANSFDESCRICAO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"A1415TrnTransfSigla", rfrProp:"Value", gxAttId:"1415"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htrntransf());
