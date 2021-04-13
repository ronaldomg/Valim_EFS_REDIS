/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:0.15
*/
gx.evt.autoSkip = false;
gx.define('hconsultadeptocompras', false, function () {
   this.ServerClass =  "hconsultadeptocompras" ;
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
      this.AV21DeptoComprasCodigoIN=gx.fn.getControlValue("vDEPTOCOMPRASCODIGOIN") ;
      this.AV22SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV19PDeptoComprasCodigo=gx.fn.getControlValue("vPDEPTOCOMPRASCODIGO") ;
   };
   this.e19n02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e20n02_client=function()
   {
      this.executeServerEvent("DEPTOCOMPRASCODIGO.CLICK", true, arguments[0], false, false);
   };
   this.e11n02_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n02_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n02_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n02_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n02_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e16n02_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e22n02_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e17n02_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e24n02_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25n02_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,39,42,45,47,49,51,53,54,55,56,57];
   this.GXLastCtrlId =57;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultadeptocompras",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3488,29,"DEPTOCOMPRASCODIGO","","","DeptoComprasCodigo","svchar",0,"px",15,15,"left","e20n02_client",[],3488,"DeptoComprasCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3483,30,"DEPTOCOMPRASNOME","","","DeptoComprasNome","svchar",0,"px",40,40,"left",null,[],3483,"DeptoComprasNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Nomeresponsavel",31,"vNOMERESPONSAVEL","Nome Responsável","","NomeResponsavel","svchar",0,"px",40,40,"left",null,[],"Nomeresponsavel","NomeResponsavel",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3484,32,"DEPTOCOMPRASRESPONSAVEL","","","DeptoComprasResponsavel","svchar",0,"px",40,40,"left",null,[],3484,"DeptoComprasResponsavel",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",33,0,"px",17,"px","e22n02_client","","Alterar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPTOCOMPRASCODIGO",gxz:"ZV16DeptoComprasCodigo",gxold:"OV16DeptoComprasCodigo",gxvar:"AV16DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV16DeptoComprasCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASCODIGO",gx.O.AV16DeptoComprasCodigo,0)},c2v:function(){gx.O.AV16DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPTOCOMPRASNOME",gxz:"ZV17DeptoComprasNome",gxold:"OV17DeptoComprasNome",gxvar:"AV17DeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17DeptoComprasNome=Value},v2z:function(Value){gx.O.ZV17DeptoComprasNome=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASNOME",gx.O.AV17DeptoComprasNome,0)},c2v:function(){gx.O.AV17DeptoComprasNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPTOCOMPRASRESPONSAVEL",gxz:"ZV18DeptoComprasResponsavel",gxold:"OV18DeptoComprasResponsavel",gxvar:"AV18DeptoComprasResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18DeptoComprasResponsavel=Value},v2z:function(Value){gx.O.ZV18DeptoComprasResponsavel=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASRESPONSAVEL",gx.O.AV18DeptoComprasResponsavel,0)},c2v:function(){gx.O.AV18DeptoComprasResponsavel=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASRESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASCODIGO",gxz:"Z3488DeptoComprasCodigo",gxold:"O3488DeptoComprasCodigo",gxvar:"A3488DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3488DeptoComprasCodigo=Value},v2z:function(Value){gx.O.Z3488DeptoComprasCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASCODIGO",row || gx.fn.currentGridRowImpl(28),gx.O.A3488DeptoComprasCodigo,0)},c2v:function(){gx.O.A3488DeptoComprasCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASCODIGO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASNOME",gxz:"Z3483DeptoComprasNome",gxold:"O3483DeptoComprasNome",gxvar:"A3483DeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3483DeptoComprasNome=Value},v2z:function(Value){gx.O.Z3483DeptoComprasNome=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASNOME",row || gx.fn.currentGridRowImpl(28),gx.O.A3483DeptoComprasNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3483DeptoComprasNome=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASNOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERESPONSAVEL",gxz:"ZV26NomeResponsavel",gxold:"OV26NomeResponsavel",gxvar:"AV26NomeResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV26NomeResponsavel=Value},v2z:function(Value){gx.O.ZV26NomeResponsavel=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMERESPONSAVEL",row || gx.fn.currentGridRowImpl(28),gx.O.AV26NomeResponsavel,0)},c2v:function(){gx.O.AV26NomeResponsavel=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMERESPONSAVEL",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASRESPONSAVEL",gxz:"Z3484DeptoComprasResponsavel",gxold:"O3484DeptoComprasResponsavel",gxvar:"A3484DeptoComprasResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3484DeptoComprasResponsavel=Value},v2z:function(Value){gx.O.Z3484DeptoComprasResponsavel=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASRESPONSAVEL",row || gx.fn.currentGridRowImpl(28),gx.O.A3484DeptoComprasResponsavel,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3484DeptoComprasResponsavel=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASRESPONSAVEL",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV20bmpAlt",gxold:"OV20bmpAlt",gxvar:"AV20bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20bmpAlt=Value},v2z:function(Value){gx.O.ZV20bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV20bmpAlt,gx.O.AV30Bmpalt_GXI)},c2v:function(){gx.O.AV30Bmpalt_GXI=this.val_GXI();gx.O.AV20bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV30Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLENAV",grid:0};
   GXValidFnc[42]={fld:"INCLUICLIENTE1",grid:0};
   GXValidFnc[45]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[47]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[49]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[51]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[53]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[54]={fld:"JS", format:2,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16DeptoComprasCodigo = "" ;
   this.ZV16DeptoComprasCodigo = "" ;
   this.OV16DeptoComprasCodigo = "" ;
   this.AV17DeptoComprasNome = "" ;
   this.ZV17DeptoComprasNome = "" ;
   this.OV17DeptoComprasNome = "" ;
   this.AV18DeptoComprasResponsavel = "" ;
   this.ZV18DeptoComprasResponsavel = "" ;
   this.OV18DeptoComprasResponsavel = "" ;
   this.Z3488DeptoComprasCodigo = "" ;
   this.O3488DeptoComprasCodigo = "" ;
   this.Z3483DeptoComprasNome = "" ;
   this.O3483DeptoComprasNome = "" ;
   this.ZV26NomeResponsavel = "" ;
   this.OV26NomeResponsavel = "" ;
   this.Z3484DeptoComprasResponsavel = "" ;
   this.O3484DeptoComprasResponsavel = "" ;
   this.ZV20bmpAlt = "" ;
   this.OV20bmpAlt = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16DeptoComprasCodigo = "" ;
   this.AV17DeptoComprasNome = "" ;
   this.AV18DeptoComprasResponsavel = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19PDeptoComprasCodigo = "" ;
   this.AV21DeptoComprasCodigoIN = "" ;
   this.A3487DeptoComprasEmpresaId = "" ;
   this.A3488DeptoComprasCodigo = "" ;
   this.A3483DeptoComprasNome = "" ;
   this.AV26NomeResponsavel = "" ;
   this.A3484DeptoComprasResponsavel = "" ;
   this.AV20bmpAlt = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV22SnParametro = "" ;
   this.Events = {"e19n02_client": ["ENTER", true] ,"e20n02_client": ["DEPTOCOMPRASCODIGO.CLICK", true] ,"e11n02_client": ["'GXM_FIRST'", true] ,"e12n02_client": ["'GXM_PREVIOUS'", true] ,"e13n02_client": ["'GXM_NEXT'", true] ,"e14n02_client": ["'GXM_LAST'", true] ,"e15n02_client": ["'PROCURAR'", true] ,"e16n02_client": ["'NOVO'", true] ,"e22n02_client": ["'ALTERAR'", true] ,"e17n02_client": ["'FECHAR'", true] ,"e24n02_client": ["'ATUALIZAPAGINA'", true] ,"e25n02_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV17DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV18DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A3484DeptoComprasResponsavel',fld:'DEPTOCOMPRASRESPONSAVEL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21DeptoComprasCodigoIN',fld:'vDEPTOCOMPRASCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV17DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV18DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{ctrl:'DEPTOCOMPRASCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPTOCOMPRASCODIGO","Title")',ctrl:'DEPTOCOMPRASCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'DEPTOCOMPRASNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPTOCOMPRASNOME","Title")',ctrl:'DEPTOCOMPRASNOME',prop:'Title'},{ctrl:'DEPTOCOMPRASRESPONSAVEL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPTOCOMPRASRESPONSAVEL","Title")',ctrl:'DEPTOCOMPRASRESPONSAVEL',prop:'Title'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'}],[{av:'AV19PDeptoComprasCodigo',fld:'vPDEPTOCOMPRASCODIGO'}]];
   this.EvtParms["DEPTOCOMPRASCODIGO.CLICK"] = [[{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV19PDeptoComprasCodigo',fld:'vPDEPTOCOMPRASCODIGO'}],[]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV17DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV18DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21DeptoComprasCodigoIN',fld:'vDEPTOCOMPRASCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A3484DeptoComprasResponsavel',fld:'DEPTOCOMPRASRESPONSAVEL'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV17DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV18DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21DeptoComprasCodigoIN',fld:'vDEPTOCOMPRASCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A3484DeptoComprasResponsavel',fld:'DEPTOCOMPRASRESPONSAVEL'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV17DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV18DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21DeptoComprasCodigoIN',fld:'vDEPTOCOMPRASCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A3484DeptoComprasResponsavel',fld:'DEPTOCOMPRASRESPONSAVEL'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV17DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV18DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21DeptoComprasCodigoIN',fld:'vDEPTOCOMPRASCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A3484DeptoComprasResponsavel',fld:'DEPTOCOMPRASRESPONSAVEL'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV17DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV18DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21DeptoComprasCodigoIN',fld:'vDEPTOCOMPRASCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A3484DeptoComprasResponsavel',fld:'DEPTOCOMPRASRESPONSAVEL'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'}],[{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19PDeptoComprasCodigo',fld:'vPDEPTOCOMPRASCODIGO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3484DeptoComprasResponsavel',fld:'DEPTOCOMPRASRESPONSAVEL'}],[{av:'AV26NomeResponsavel',fld:'vNOMERESPONSAVEL'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV17DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV18DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV20bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV21DeptoComprasCodigoIN',fld:'vDEPTOCOMPRASCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A3484DeptoComprasResponsavel',fld:'DEPTOCOMPRASRESPONSAVEL'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV21DeptoComprasCodigoIN", "vDEPTOCOMPRASCODIGOIN", 0, "svchar");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV19PDeptoComprasCodigo", "vPDEPTOCOMPRASCODIGO", 0, "svchar");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV21DeptoComprasCodigoIN", "vDEPTOCOMPRASCODIGOIN", 0, "svchar");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV20bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV20bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV21DeptoComprasCodigoIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV22SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A3484DeptoComprasResponsavel", rfrProp:"Value", gxAttId:"3484"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultadeptocompras());
