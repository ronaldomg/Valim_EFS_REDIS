/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:54:17.28
*/
gx.evt.autoSkip = false;
gx.define('hconsultasituacao', false, function () {
   this.ServerClass =  "hconsultasituacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV19SituacaoEmpresaId=gx.fn.getControlValue("vSITUACAOEMPRESAID") ;
      this.AV18OutSituacaoId=gx.fn.getIntegerValue("vOUTSITUACAOID",'.') ;
   };
   this.e16ub2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11ub2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12ub2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13ub2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14ub2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e19ub2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e20ub1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,7,8,9,10,11,12,13,19,22,24,26,28,30,31,32,33];
   this.GXLastCtrlId =33;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",5,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultasituacao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(5350,6,"SITUACAOID","","","SituacaoId","int",0,"px",2,2,"right",null,[],5350,"SituacaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5344,7,"SITUACAODESCRICAO","","","SituacaoDescricao","char",0,"px",30,30,"left",null,[],5344,"SituacaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Snvenda","vSNVENDA",8,0,"px",17,"px",null,"","À Venda","Image","");
   GridContainer.addBitmap("&Snreservado","vSNRESERVADO",9,0,"px",17,"px",null,"","Reservado","Image","");
   GridContainer.addBitmap("&Snvendido","vSNVENDIDO",10,0,"px",17,"px",null,"","Vendido","Image","");
   GridContainer.addSingleLineEdit(5345,11,"SITUACAOSNVENDA","A Venda","","SituacaoSnVenda","char",0,"px",1,1,"left",null,[],5345,"SituacaoSnVenda",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5346,12,"SITUACAOSNRESERVADO","Reservado","","SituacaoSnReservado","char",0,"px",1,1,"left",null,[],5346,"SituacaoSnReservado",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5347,13,"SITUACAOSNVENDIDO","Vendido","","SituacaoSnVendido","char",0,"px",1,1,"left",null,[],5347,"SituacaoSnVendido",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOID",gxz:"Z5350SituacaoId",gxold:"O5350SituacaoId",gxvar:"A5350SituacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5350SituacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5350SituacaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SITUACAOID",row || gx.fn.currentGridRowImpl(5),gx.O.A5350SituacaoId,0)},c2v:function(){gx.O.A5350SituacaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SITUACAOID",row || gx.fn.currentGridRowImpl(5),'.')},nac:gx.falseFn};
   GXValidFnc[7]={lvl:2,type:"char",len:30,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAODESCRICAO",gxz:"Z5344SituacaoDescricao",gxold:"O5344SituacaoDescricao",gxvar:"A5344SituacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5344SituacaoDescricao=Value},v2z:function(Value){gx.O.Z5344SituacaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAODESCRICAO",row || gx.fn.currentGridRowImpl(5),gx.O.A5344SituacaoDescricao,0)},c2v:function(){gx.O.A5344SituacaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAODESCRICAO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV15SnVenda",gxold:"OV15SnVenda",gxvar:"AV15SnVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15SnVenda=Value},v2z:function(Value){gx.O.ZV15SnVenda=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSNVENDA",row || gx.fn.currentGridRowImpl(5),gx.O.AV15SnVenda,gx.O.AV25Snvenda_GXI)},c2v:function(){gx.O.AV25Snvenda_GXI=this.val_GXI();gx.O.AV15SnVenda=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNVENDA",row || gx.fn.currentGridRowImpl(5))},val_GXI:function(row){return gx.fn.getGridControlValue("vSNVENDA_GXI",row || gx.fn.currentGridRowImpl(5))}, gxvar_GXI:'AV25Snvenda_GXI',nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNRESERVADO",gxz:"ZV16SnReservado",gxold:"OV16SnReservado",gxvar:"AV16SnReservado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16SnReservado=Value},v2z:function(Value){gx.O.ZV16SnReservado=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSNRESERVADO",row || gx.fn.currentGridRowImpl(5),gx.O.AV16SnReservado,gx.O.AV26Snreservado_GXI)},c2v:function(){gx.O.AV26Snreservado_GXI=this.val_GXI();gx.O.AV16SnReservado=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNRESERVADO",row || gx.fn.currentGridRowImpl(5))},val_GXI:function(row){return gx.fn.getGridControlValue("vSNRESERVADO_GXI",row || gx.fn.currentGridRowImpl(5))}, gxvar_GXI:'AV26Snreservado_GXI',nac:gx.falseFn};
   GXValidFnc[10]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDIDO",gxz:"ZV17SnVendido",gxold:"OV17SnVendido",gxvar:"AV17SnVendido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17SnVendido=Value},v2z:function(Value){gx.O.ZV17SnVendido=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSNVENDIDO",row || gx.fn.currentGridRowImpl(5),gx.O.AV17SnVendido,gx.O.AV27Snvendido_GXI)},c2v:function(){gx.O.AV27Snvendido_GXI=this.val_GXI();gx.O.AV17SnVendido=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNVENDIDO",row || gx.fn.currentGridRowImpl(5))},val_GXI:function(row){return gx.fn.getGridControlValue("vSNVENDIDO_GXI",row || gx.fn.currentGridRowImpl(5))}, gxvar_GXI:'AV27Snvendido_GXI',nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOSNVENDA",gxz:"Z5345SituacaoSnVenda",gxold:"O5345SituacaoSnVenda",gxvar:"A5345SituacaoSnVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5345SituacaoSnVenda=Value},v2z:function(Value){gx.O.Z5345SituacaoSnVenda=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOSNVENDA",row || gx.fn.currentGridRowImpl(5),gx.O.A5345SituacaoSnVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5345SituacaoSnVenda=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOSNVENDA",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOSNRESERVADO",gxz:"Z5346SituacaoSnReservado",gxold:"O5346SituacaoSnReservado",gxvar:"A5346SituacaoSnReservado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5346SituacaoSnReservado=Value},v2z:function(Value){gx.O.Z5346SituacaoSnReservado=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOSNRESERVADO",row || gx.fn.currentGridRowImpl(5),gx.O.A5346SituacaoSnReservado,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5346SituacaoSnReservado=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOSNRESERVADO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:5,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOSNVENDIDO",gxz:"Z5347SituacaoSnVendido",gxold:"O5347SituacaoSnVendido",gxvar:"A5347SituacaoSnVendido",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5347SituacaoSnVendido=Value},v2z:function(Value){gx.O.Z5347SituacaoSnVendido=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOSNVENDIDO",row || gx.fn.currentGridRowImpl(5),gx.O.A5347SituacaoSnVendido,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5347SituacaoSnVendido=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOSNVENDIDO",row || gx.fn.currentGridRowImpl(5))},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TABLENAV",grid:0};
   GXValidFnc[22]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[24]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[26]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[28]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[30]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.Z5350SituacaoId = 0 ;
   this.O5350SituacaoId = 0 ;
   this.Z5344SituacaoDescricao = "" ;
   this.O5344SituacaoDescricao = "" ;
   this.ZV15SnVenda = "" ;
   this.OV15SnVenda = "" ;
   this.ZV16SnReservado = "" ;
   this.OV16SnReservado = "" ;
   this.ZV17SnVendido = "" ;
   this.OV17SnVendido = "" ;
   this.Z5345SituacaoSnVenda = "" ;
   this.O5345SituacaoSnVenda = "" ;
   this.Z5346SituacaoSnReservado = "" ;
   this.O5346SituacaoSnReservado = "" ;
   this.Z5347SituacaoSnVendido = "" ;
   this.O5347SituacaoSnVendido = "" ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18OutSituacaoId = 0 ;
   this.A5318SituacaoEmpresaId = "" ;
   this.A5350SituacaoId = 0 ;
   this.A5344SituacaoDescricao = "" ;
   this.AV15SnVenda = "" ;
   this.AV16SnReservado = "" ;
   this.AV17SnVendido = "" ;
   this.A5345SituacaoSnVenda = "" ;
   this.A5346SituacaoSnReservado = "" ;
   this.A5347SituacaoSnVendido = "" ;
   this.AV19SituacaoEmpresaId = "" ;
   this.Events = {"e16ub2_client": ["ENTER", true] ,"e11ub2_client": ["'GXM_FIRST'", true] ,"e12ub2_client": ["'GXM_PREVIOUS'", true] ,"e13ub2_client": ["'GXM_NEXT'", true] ,"e14ub2_client": ["'GXM_LAST'", true] ,"e19ub2_client": ["'ATUALIZAPAGINA'", true] ,"e20ub1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV19SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'SITUACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SITUACAOID","Title")',ctrl:'SITUACAOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'SITUACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SITUACAODESCRICAO","Title")',ctrl:'SITUACAODESCRICAO',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A5350SituacaoId',fld:'SITUACAOID'}],[{av:'AV18OutSituacaoId',fld:'vOUTSITUACAOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'}],[{av:'AV15SnVenda',fld:'vSNVENDA'},{av:'AV16SnReservado',fld:'vSNRESERVADO'},{av:'AV17SnVendido',fld:'vSNVENDIDO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19SituacaoEmpresaId',fld:'vSITUACAOEMPRESAID'},{av:'A5345SituacaoSnVenda',fld:'SITUACAOSNVENDA'},{av:'A5346SituacaoSnReservado',fld:'SITUACAOSNRESERVADO'},{av:'A5347SituacaoSnVendido',fld:'SITUACAOSNVENDIDO'}],[]];
   this.setVCMap("AV19SituacaoEmpresaId", "vSITUACAOEMPRESAID", 0, "char");
   this.setVCMap("AV18OutSituacaoId", "vOUTSITUACAOID", 0, "int");
   this.setVCMap("AV19SituacaoEmpresaId", "vSITUACAOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar({rfrVar:"AV19SituacaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A5345SituacaoSnVenda", rfrProp:"Value", gxAttId:"5345"});
   GridContainer.addRefreshingVar({rfrVar:"A5346SituacaoSnReservado", rfrProp:"Value", gxAttId:"5346"});
   GridContainer.addRefreshingVar({rfrVar:"A5347SituacaoSnVendido", rfrProp:"Value", gxAttId:"5347"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultasituacao());
