/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:16:49.49
*/
gx.evt.autoSkip = false;
gx.define('hconvenio', false, function () {
   this.ServerClass =  "hconvenio" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11ca2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12ca2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17ca2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13ca2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14ca2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15ca2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16ca2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20ca2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21ca2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22ca2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23ca2_client=function()
   {
      this.executeServerEvent("'VERBAS'", true, arguments[0], false, false);
   };
   this.e24ca2_client=function()
   {
      this.executeServerEvent("'CENTROCUSTO'", true, arguments[0], false, false);
   };
   this.e25ca2_client=function()
   {
      this.executeServerEvent("'ACESSAHISTORICO'", true, arguments[0], false, false);
   };
   this.e27ca2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e28ca2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e29ca2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,33,36,39,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,67,68,69,70,71,72,79];
   this.GXLastCtrlId =79;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconvenio",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1681,59,"CONVENIOID","","","ConvenioId","int",0,"px",7,7,"right",null,[],1681,"ConvenioId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2082,60,"CONVENIODESCRICAO","","","ConvenioDescricao","svchar",0,"px",40,40,"left",null,[],2082,"ConvenioDescricao",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Conveniodescricaogrid",61,"vCONVENIODESCRICAOGRID","Descrição","","ConvenioDescricaoGrid","svchar",0,"px",40,40,"left",null,[],"Conveniodescricaogrid","ConvenioDescricaoGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2083,62,"CONVENIONUMERO","","","ConvenioNumero","svchar",0,"px",50,50,"left",null,[],2083,"ConvenioNumero",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Convenionumerogrid",63,"vCONVENIONUMEROGRID","Número do Convênio","","ConvenioNumeroGrid","svchar",0,"px",50,50,"left",null,[],"Convenionumerogrid","ConvenioNumeroGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2084,64,"CONVENIOEXERCICIO","","","ConvenioExercicio","svchar",0,"px",15,15,"left",null,[],2084,"ConvenioExercicio",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2087,65,"CONVENIOVENCIMENTO","","","ConvenioVencimento","date",0,"px",10,10,"right",null,[],2087,"ConvenioVencimento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2080,66,"CONVENIOTIPOCONVENIO","","ConvenioTipoConvenio","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpver","vBMPVER",67,0,"px",17,"px","e23ca2_client","","C.Contábil","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpccus","vBMPCCUS",68,0,"px",17,"px","e24ca2_client","","C.Custo","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmphis","vBMPHIS",69,0,"px",17,"px","e25ca2_client","","CBC","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",70,0,"px",17,"px","e20ca2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",71,0,"px",17,"px","e21ca2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",72,0,"px",17,"px","e22ca2_client","","Cons","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV27ConvenioId",gxold:"OV27ConvenioId",gxvar:"AV27ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV27ConvenioId,0)},c2v:function(){gx.O.AV27ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIODESCRICAO",gxz:"ZV28ConvenioDescricao",gxold:"OV28ConvenioDescricao",gxvar:"AV28ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV28ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV28ConvenioDescricao,0)},c2v:function(){gx.O.AV28ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIONUMERO",gxz:"ZV38ConvenioNumero",gxold:"OV38ConvenioNumero",gxvar:"AV38ConvenioNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ConvenioNumero=Value},v2z:function(Value){gx.O.ZV38ConvenioNumero=Value},v2c:function(){gx.fn.setControlValue("vCONVENIONUMERO",gx.O.AV38ConvenioNumero,0)},c2v:function(){gx.O.AV38ConvenioNumero=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIONUMERO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOTIPOCONVENIO",gxz:"ZV29ConvenioTipoConvenio",gxold:"OV29ConvenioTipoConvenio",gxvar:"AV29ConvenioTipoConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29ConvenioTipoConvenio=Value},v2z:function(Value){gx.O.ZV29ConvenioTipoConvenio=Value},v2c:function(){gx.fn.setComboBoxValue("vCONVENIOTIPOCONVENIO",gx.O.AV29ConvenioTipoConvenio)},c2v:function(){gx.O.AV29ConvenioTipoConvenio=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOTIPOCONVENIO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE6",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"IMAGE1",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOID",row || gx.fn.currentGridRowImpl(58),gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIODESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIODESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAOGRID",gxz:"ZV36ConvenioDescricaoGrid",gxold:"OV36ConvenioDescricaoGrid",gxvar:"AV36ConvenioDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV36ConvenioDescricaoGrid=Value},v2z:function(Value){gx.O.ZV36ConvenioDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vCONVENIODESCRICAOGRID",row || gx.fn.currentGridRowImpl(58),gx.O.AV36ConvenioDescricaoGrid,0)},c2v:function(){gx.O.AV36ConvenioDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONVENIODESCRICAOGRID",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIONUMERO",gxz:"Z2083ConvenioNumero",gxold:"O2083ConvenioNumero",gxvar:"A2083ConvenioNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2083ConvenioNumero=Value},v2z:function(Value){gx.O.Z2083ConvenioNumero=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIONUMERO",row || gx.fn.currentGridRowImpl(58),gx.O.A2083ConvenioNumero,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2083ConvenioNumero=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIONUMERO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIONUMEROGRID",gxz:"ZV37ConvenioNumeroGrid",gxold:"OV37ConvenioNumeroGrid",gxvar:"AV37ConvenioNumeroGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37ConvenioNumeroGrid=Value},v2z:function(Value){gx.O.ZV37ConvenioNumeroGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vCONVENIONUMEROGRID",row || gx.fn.currentGridRowImpl(58),gx.O.AV37ConvenioNumeroGrid,0)},c2v:function(){gx.O.AV37ConvenioNumeroGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONVENIONUMEROGRID",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOEXERCICIO",gxz:"Z2084ConvenioExercicio",gxold:"O2084ConvenioExercicio",gxvar:"A2084ConvenioExercicio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2084ConvenioExercicio=Value},v2z:function(Value){gx.O.Z2084ConvenioExercicio=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOEXERCICIO",row || gx.fn.currentGridRowImpl(58),gx.O.A2084ConvenioExercicio,0)},c2v:function(){gx.O.A2084ConvenioExercicio=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOEXERCICIO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOVENCIMENTO",gxz:"Z2087ConvenioVencimento",gxold:"O2087ConvenioVencimento",gxvar:"A2087ConvenioVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2087ConvenioVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2087ConvenioVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOVENCIMENTO",row || gx.fn.currentGridRowImpl(58),gx.O.A2087ConvenioVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2087ConvenioVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONVENIOVENCIMENTO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOTIPOCONVENIO",gxz:"Z2080ConvenioTipoConvenio",gxold:"O2080ConvenioTipoConvenio",gxvar:"A2080ConvenioTipoConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2080ConvenioTipoConvenio=Value},v2z:function(Value){gx.O.Z2080ConvenioTipoConvenio=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONVENIOTIPOCONVENIO",row || gx.fn.currentGridRowImpl(58),gx.O.A2080ConvenioTipoConvenio)},c2v:function(){gx.O.A2080ConvenioTipoConvenio=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOTIPOCONVENIO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPVER",gxz:"ZV32bmpVer",gxold:"OV32bmpVer",gxvar:"AV32bmpVer",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpVer=Value},v2z:function(Value){gx.O.ZV32bmpVer=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPVER",row || gx.fn.currentGridRowImpl(58),gx.O.AV32bmpVer,gx.O.AV46Bmpver_GXI)},c2v:function(){gx.O.AV46Bmpver_GXI=this.val_GXI();gx.O.AV32bmpVer=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPVER",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPVER_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV46Bmpver_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCCUS",gxz:"ZV33bmpCCus",gxold:"OV33bmpCCus",gxvar:"AV33bmpCCus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpCCus=Value},v2z:function(Value){gx.O.ZV33bmpCCus=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCCUS",row || gx.fn.currentGridRowImpl(58),gx.O.AV33bmpCCus,gx.O.AV47Bmpccus_GXI)},c2v:function(){gx.O.AV47Bmpccus_GXI=this.val_GXI();gx.O.AV33bmpCCus=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCCUS",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCCUS_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV47Bmpccus_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPHIS",gxz:"ZV30bmpHis",gxold:"OV30bmpHis",gxvar:"AV30bmpHis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpHis=Value},v2z:function(Value){gx.O.ZV30bmpHis=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPHIS",row || gx.fn.currentGridRowImpl(58),gx.O.AV30bmpHis,gx.O.AV48Bmphis_GXI)},c2v:function(){gx.O.AV48Bmphis_GXI=this.val_GXI();gx.O.AV30bmpHis=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPHIS",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPHIS_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV48Bmphis_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27ConvenioId = 0 ;
   this.ZV27ConvenioId = 0 ;
   this.OV27ConvenioId = 0 ;
   this.AV28ConvenioDescricao = "" ;
   this.ZV28ConvenioDescricao = "" ;
   this.OV28ConvenioDescricao = "" ;
   this.AV38ConvenioNumero = "" ;
   this.ZV38ConvenioNumero = "" ;
   this.OV38ConvenioNumero = "" ;
   this.AV29ConvenioTipoConvenio = "" ;
   this.ZV29ConvenioTipoConvenio = "" ;
   this.OV29ConvenioTipoConvenio = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.ZV36ConvenioDescricaoGrid = "" ;
   this.OV36ConvenioDescricaoGrid = "" ;
   this.Z2083ConvenioNumero = "" ;
   this.O2083ConvenioNumero = "" ;
   this.ZV37ConvenioNumeroGrid = "" ;
   this.OV37ConvenioNumeroGrid = "" ;
   this.Z2084ConvenioExercicio = "" ;
   this.O2084ConvenioExercicio = "" ;
   this.Z2087ConvenioVencimento = gx.date.nullDate() ;
   this.O2087ConvenioVencimento = gx.date.nullDate() ;
   this.Z2080ConvenioTipoConvenio = "" ;
   this.O2080ConvenioTipoConvenio = "" ;
   this.ZV32bmpVer = "" ;
   this.OV32bmpVer = "" ;
   this.ZV33bmpCCus = "" ;
   this.OV33bmpCCus = "" ;
   this.ZV30bmpHis = "" ;
   this.OV30bmpHis = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27ConvenioId = 0 ;
   this.AV28ConvenioDescricao = "" ;
   this.AV38ConvenioNumero = "" ;
   this.AV29ConvenioTipoConvenio = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.AV36ConvenioDescricaoGrid = "" ;
   this.A2083ConvenioNumero = "" ;
   this.AV37ConvenioNumeroGrid = "" ;
   this.A2084ConvenioExercicio = "" ;
   this.A2087ConvenioVencimento = gx.date.nullDate() ;
   this.A2080ConvenioTipoConvenio = "" ;
   this.AV32bmpVer = "" ;
   this.AV33bmpCCus = "" ;
   this.AV30bmpHis = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.Events = {"e11ca2_client": ["'ANTERIOR'", true] ,"e12ca2_client": ["'PROXIMO'", true] ,"e17ca2_client": ["VPAGINA.CLICK", true] ,"e13ca2_client": ["'NOVO'", true] ,"e14ca2_client": ["'FECHAR'", true] ,"e15ca2_client": ["'IMPRIMIR'", true] ,"e16ca2_client": ["'PROCURAR'", true] ,"e20ca2_client": ["'ALTERAR'", true] ,"e21ca2_client": ["'EXCLUIR'", true] ,"e22ca2_client": ["'CONSULTAR'", true] ,"e23ca2_client": ["'VERBAS'", true] ,"e24ca2_client": ["'CENTROCUSTO'", true] ,"e25ca2_client": ["'ACESSAHISTORICO'", true] ,"e27ca2_client": ["'ATUALIZAPAGINA'", true] ,"e28ca2_client": ["ENTER", true] ,"e29ca2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV38ConvenioNumero',fld:'vCONVENIONUMERO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpVer',fld:'vBMPVER'},{av:'gx.fn.getCtrlProperty("vBMPVER","Tooltiptext")',ctrl:'vBMPVER',prop:'Tooltiptext'},{av:'AV33bmpCCus',fld:'vBMPCCUS'},{av:'gx.fn.getCtrlProperty("vBMPCCUS","Tooltiptext")',ctrl:'vBMPCCUS',prop:'Tooltiptext'},{av:'AV30bmpHis',fld:'vBMPHIS'},{av:'gx.fn.getCtrlProperty("vBMPHIS","Tooltiptext")',ctrl:'vBMPHIS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2083ConvenioNumero',fld:'CONVENIONUMERO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV38ConvenioNumero',fld:'vCONVENIONUMERO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpVer',fld:'vBMPVER'},{av:'gx.fn.getCtrlProperty("vBMPVER","Tooltiptext")',ctrl:'vBMPVER',prop:'Tooltiptext'},{av:'AV33bmpCCus',fld:'vBMPCCUS'},{av:'gx.fn.getCtrlProperty("vBMPCCUS","Tooltiptext")',ctrl:'vBMPCCUS',prop:'Tooltiptext'},{av:'AV30bmpHis',fld:'vBMPHIS'},{av:'gx.fn.getCtrlProperty("vBMPHIS","Tooltiptext")',ctrl:'vBMPHIS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2083ConvenioNumero',fld:'CONVENIONUMERO'}],[{ctrl:'CONVENIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOID","Title")',ctrl:'CONVENIOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONVENIODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIODESCRICAO","Title")',ctrl:'CONVENIODESCRICAO',prop:'Title'},{ctrl:'CONVENIONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIONUMERO","Title")',ctrl:'CONVENIONUMERO',prop:'Title'},{ctrl:'CONVENIOEXERCICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOEXERCICIO","Title")',ctrl:'CONVENIOEXERCICIO',prop:'Title'},{ctrl:'CONVENIOVENCIMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOVENCIMENTO","Title")',ctrl:'CONVENIOVENCIMENTO',prop:'Title'},{ctrl:'CONVENIOTIPOCONVENIO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV38ConvenioNumero',fld:'vCONVENIONUMERO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpVer',fld:'vBMPVER'},{av:'gx.fn.getCtrlProperty("vBMPVER","Tooltiptext")',ctrl:'vBMPVER',prop:'Tooltiptext'},{av:'AV33bmpCCus',fld:'vBMPCCUS'},{av:'gx.fn.getCtrlProperty("vBMPCCUS","Tooltiptext")',ctrl:'vBMPCCUS',prop:'Tooltiptext'},{av:'AV30bmpHis',fld:'vBMPHIS'},{av:'gx.fn.getCtrlProperty("vBMPHIS","Tooltiptext")',ctrl:'vBMPHIS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2083ConvenioNumero',fld:'CONVENIONUMERO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV38ConvenioNumero',fld:'vCONVENIONUMERO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpVer',fld:'vBMPVER'},{av:'gx.fn.getCtrlProperty("vBMPVER","Tooltiptext")',ctrl:'vBMPVER',prop:'Tooltiptext'},{av:'AV33bmpCCus',fld:'vBMPCCUS'},{av:'gx.fn.getCtrlProperty("vBMPCCUS","Tooltiptext")',ctrl:'vBMPCCUS',prop:'Tooltiptext'},{av:'AV30bmpHis',fld:'vBMPHIS'},{av:'gx.fn.getCtrlProperty("vBMPHIS","Tooltiptext")',ctrl:'vBMPHIS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2083ConvenioNumero',fld:'CONVENIONUMERO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV38ConvenioNumero',fld:'vCONVENIONUMERO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpVer',fld:'vBMPVER'},{av:'gx.fn.getCtrlProperty("vBMPVER","Tooltiptext")',ctrl:'vBMPVER',prop:'Tooltiptext'},{av:'AV33bmpCCus',fld:'vBMPCCUS'},{av:'gx.fn.getCtrlProperty("vBMPCCUS","Tooltiptext")',ctrl:'vBMPCCUS',prop:'Tooltiptext'},{av:'AV30bmpHis',fld:'vBMPHIS'},{av:'gx.fn.getCtrlProperty("vBMPHIS","Tooltiptext")',ctrl:'vBMPHIS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2083ConvenioNumero',fld:'CONVENIONUMERO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV35QtdPagGeradas',fld:'vQTDPAGGERADAS'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV35QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV38ConvenioNumero',fld:'vCONVENIONUMERO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpVer',fld:'vBMPVER'},{av:'gx.fn.getCtrlProperty("vBMPVER","Tooltiptext")',ctrl:'vBMPVER',prop:'Tooltiptext'},{av:'AV33bmpCCus',fld:'vBMPCCUS'},{av:'gx.fn.getCtrlProperty("vBMPCCUS","Tooltiptext")',ctrl:'vBMPCCUS',prop:'Tooltiptext'},{av:'AV30bmpHis',fld:'vBMPHIS'},{av:'gx.fn.getCtrlProperty("vBMPHIS","Tooltiptext")',ctrl:'vBMPHIS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2083ConvenioNumero',fld:'CONVENIONUMERO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'}],[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'}],[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'}],[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'VERBAS'"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'}],[]];
   this.EvtParms["'CENTROCUSTO'"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'}],[]];
   this.EvtParms["'ACESSAHISTORICO'"] = [[{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2083ConvenioNumero',fld:'CONVENIONUMERO'}],[{av:'AV36ConvenioDescricaoGrid',fld:'vCONVENIODESCRICAOGRID'},{av:'AV37ConvenioNumeroGrid',fld:'vCONVENIONUMEROGRID'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV38ConvenioNumero',fld:'vCONVENIONUMERO'},{av:'AV29ConvenioTipoConvenio',fld:'vCONVENIOTIPOCONVENIO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32bmpVer',fld:'vBMPVER'},{av:'gx.fn.getCtrlProperty("vBMPVER","Tooltiptext")',ctrl:'vBMPVER',prop:'Tooltiptext'},{av:'AV33bmpCCus',fld:'vBMPCCUS'},{av:'gx.fn.getCtrlProperty("vBMPCCUS","Tooltiptext")',ctrl:'vBMPCCUS',prop:'Tooltiptext'},{av:'AV30bmpHis',fld:'vBMPHIS'},{av:'gx.fn.getCtrlProperty("vBMPHIS","Tooltiptext")',ctrl:'vBMPHIS',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2083ConvenioNumero',fld:'CONVENIONUMERO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpVer", rfrProp:"Value", gxAttId:"Bmpver"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpVer", rfrProp:"Tooltiptext", gxAttId:"Bmpver"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpCCus", rfrProp:"Value", gxAttId:"Bmpccus"});
   GridContainer.addRefreshingVar({rfrVar:"AV33bmpCCus", rfrProp:"Tooltiptext", gxAttId:"Bmpccus"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpHis", rfrProp:"Value", gxAttId:"Bmphis"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpHis", rfrProp:"Tooltiptext", gxAttId:"Bmphis"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2082ConvenioDescricao", rfrProp:"Value", gxAttId:"2082"});
   GridContainer.addRefreshingVar({rfrVar:"A2083ConvenioNumero", rfrProp:"Value", gxAttId:"2083"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconvenio());
