/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:4.39
*/
gx.evt.autoSkip = false;
gx.define('gx0md0', false, function () {
   this.ServerClass =  "gx0md0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pAgrupamentoEmpresaId=gx.fn.getControlValue("vPAGRUPAMENTOEMPRESAID") ;
      this.AV14pAgrupamentoNumero=gx.fn.getIntegerValue("vPAGRUPAMENTONUMERO",'.') ;
   };
   this.e132b62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142b61_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0md0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10990,53,"AGRUPAMENTOEMPRESAID","Empresa Id","","AgrupamentoEmpresaId","char",0,"px",10,10,"left",null,[],10990,"AgrupamentoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10991,54,"AGRUPAMENTONUMERO","Numero","","AgrupamentoNumero","int",0,"px",10,10,"right",null,[],10991,"AgrupamentoNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10992,55,"AGRUPAMENTOSITUACAO","Situacao","Selecionar","AgrupamentoSituacao","char",0,"px",1,1,"left",null,[],10992,"AgrupamentoSituacao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11014,56,"AGRUPAMENTOTIPO","Tipo","","AgrupamentoTipo","char",0,"px",1,1,"left",null,[],11014,"AgrupamentoTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10993,57,"AGRUPAMENTOUSUARIO","Usuario","","AgrupamentoUsuario","char",0,"px",12,12,"left",null,[],10993,"AgrupamentoUsuario",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11011,58,"AGRUPAMENTOUSUARIORECEBER","Usuario Receber","","AgrupamentoUsuarioReceber","char",0,"px",12,12,"left",null,[],11011,"AgrupamentoUsuarioReceber",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAGRUPAMENTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOEMPRESAID",gxz:"ZV6cAgrupamentoEmpresaId",gxold:"OV6cAgrupamentoEmpresaId",gxvar:"AV6cAgrupamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAgrupamentoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cAgrupamentoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOEMPRESAID",gx.O.AV6cAgrupamentoEmpresaId,0)},c2v:function(){gx.O.AV6cAgrupamentoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAGRUPAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAGRUPAMENTONUMERO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTONUMERO",gxz:"ZV7cAgrupamentoNumero",gxold:"OV7cAgrupamentoNumero",gxvar:"AV7cAgrupamentoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAgrupamentoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cAgrupamentoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTONUMERO",gx.O.AV7cAgrupamentoNumero,0)},c2v:function(){gx.O.AV7cAgrupamentoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAGRUPAMENTONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKAGRUPAMENTOSITUACAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOSITUACAO",gxz:"ZV8cAgrupamentoSituacao",gxold:"OV8cAgrupamentoSituacao",gxvar:"AV8cAgrupamentoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAgrupamentoSituacao=Value},v2z:function(Value){gx.O.ZV8cAgrupamentoSituacao=Value},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOSITUACAO",gx.O.AV8cAgrupamentoSituacao,0)},c2v:function(){gx.O.AV8cAgrupamentoSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCAGRUPAMENTOSITUACAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKAGRUPAMENTOTIPO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOTIPO",gxz:"ZV9cAgrupamentoTipo",gxold:"OV9cAgrupamentoTipo",gxvar:"AV9cAgrupamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAgrupamentoTipo=Value},v2z:function(Value){gx.O.ZV9cAgrupamentoTipo=Value},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOTIPO",gx.O.AV9cAgrupamentoTipo,0)},c2v:function(){gx.O.AV9cAgrupamentoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCAGRUPAMENTOTIPO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKAGRUPAMENTOUSUARIO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOUSUARIO",gxz:"ZV10cAgrupamentoUsuario",gxold:"OV10cAgrupamentoUsuario",gxvar:"AV10cAgrupamentoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cAgrupamentoUsuario=Value},v2z:function(Value){gx.O.ZV10cAgrupamentoUsuario=Value},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOUSUARIO",gx.O.AV10cAgrupamentoUsuario,0)},c2v:function(){gx.O.AV10cAgrupamentoUsuario=this.val()},val:function(){return gx.fn.getControlValue("vCAGRUPAMENTOUSUARIO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKAGRUPAMENTOUSUARIORECEBER", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTOUSUARIORECEBER",gxz:"ZV11cAgrupamentoUsuarioReceber",gxold:"OV11cAgrupamentoUsuarioReceber",gxvar:"AV11cAgrupamentoUsuarioReceber",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cAgrupamentoUsuarioReceber=Value},v2z:function(Value){gx.O.ZV11cAgrupamentoUsuarioReceber=Value},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTOUSUARIORECEBER",gx.O.AV11cAgrupamentoUsuarioReceber,0)},c2v:function(){gx.O.AV11cAgrupamentoUsuarioReceber=this.val()},val:function(){return gx.fn.getControlValue("vCAGRUPAMENTOUSUARIORECEBER")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKAGRUPAMENTODATAHORA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGRUPAMENTODATAHORA",gxz:"ZV12cAgrupamentoDataHora",gxold:"OV12cAgrupamentoDataHora",gxvar:"AV12cAgrupamentoDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cAgrupamentoDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cAgrupamentoDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAGRUPAMENTODATAHORA",gx.O.AV12cAgrupamentoDataHora,0)},c2v:function(){gx.O.AV12cAgrupamentoDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCAGRUPAMENTODATAHORA")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTOEMPRESAID",gxz:"Z10990AgrupamentoEmpresaId",gxold:"O10990AgrupamentoEmpresaId",gxvar:"A10990AgrupamentoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10990AgrupamentoEmpresaId=Value},v2z:function(Value){gx.O.Z10990AgrupamentoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A10990AgrupamentoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10990AgrupamentoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("AGRUPAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTONUMERO",gxz:"Z10991AgrupamentoNumero",gxold:"O10991AgrupamentoNumero",gxvar:"A10991AgrupamentoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10991AgrupamentoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10991AgrupamentoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTONUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A10991AgrupamentoNumero,0)},c2v:function(){gx.O.A10991AgrupamentoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AGRUPAMENTONUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTOSITUACAO",gxz:"Z10992AgrupamentoSituacao",gxold:"O10992AgrupamentoSituacao",gxvar:"A10992AgrupamentoSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10992AgrupamentoSituacao=Value},v2z:function(Value){gx.O.Z10992AgrupamentoSituacao=Value},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTOSITUACAO",row || gx.fn.currentGridRowImpl(51),gx.O.A10992AgrupamentoSituacao,0)},c2v:function(){gx.O.A10992AgrupamentoSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("AGRUPAMENTOSITUACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTOTIPO",gxz:"Z11014AgrupamentoTipo",gxold:"O11014AgrupamentoTipo",gxvar:"A11014AgrupamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11014AgrupamentoTipo=Value},v2z:function(Value){gx.O.Z11014AgrupamentoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTOTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A11014AgrupamentoTipo,0)},c2v:function(){gx.O.A11014AgrupamentoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("AGRUPAMENTOTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTOUSUARIO",gxz:"Z10993AgrupamentoUsuario",gxold:"O10993AgrupamentoUsuario",gxvar:"A10993AgrupamentoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10993AgrupamentoUsuario=Value},v2z:function(Value){gx.O.Z10993AgrupamentoUsuario=Value},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTOUSUARIO",row || gx.fn.currentGridRowImpl(51),gx.O.A10993AgrupamentoUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10993AgrupamentoUsuario=this.val()},val:function(row){return gx.fn.getGridControlValue("AGRUPAMENTOUSUARIO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGRUPAMENTOUSUARIORECEBER",gxz:"Z11011AgrupamentoUsuarioReceber",gxold:"O11011AgrupamentoUsuarioReceber",gxvar:"A11011AgrupamentoUsuarioReceber",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11011AgrupamentoUsuarioReceber=Value},v2z:function(Value){gx.O.Z11011AgrupamentoUsuarioReceber=Value},v2c:function(row){gx.fn.setGridControlValue("AGRUPAMENTOUSUARIORECEBER",row || gx.fn.currentGridRowImpl(51),gx.O.A11011AgrupamentoUsuarioReceber,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11011AgrupamentoUsuarioReceber=this.val()},val:function(row){return gx.fn.getGridControlValue("AGRUPAMENTOUSUARIORECEBER",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cAgrupamentoEmpresaId = "" ;
   this.ZV6cAgrupamentoEmpresaId = "" ;
   this.OV6cAgrupamentoEmpresaId = "" ;
   this.AV7cAgrupamentoNumero = 0 ;
   this.ZV7cAgrupamentoNumero = 0 ;
   this.OV7cAgrupamentoNumero = 0 ;
   this.AV8cAgrupamentoSituacao = "" ;
   this.ZV8cAgrupamentoSituacao = "" ;
   this.OV8cAgrupamentoSituacao = "" ;
   this.AV9cAgrupamentoTipo = "" ;
   this.ZV9cAgrupamentoTipo = "" ;
   this.OV9cAgrupamentoTipo = "" ;
   this.AV10cAgrupamentoUsuario = "" ;
   this.ZV10cAgrupamentoUsuario = "" ;
   this.OV10cAgrupamentoUsuario = "" ;
   this.AV11cAgrupamentoUsuarioReceber = "" ;
   this.ZV11cAgrupamentoUsuarioReceber = "" ;
   this.OV11cAgrupamentoUsuarioReceber = "" ;
   this.AV12cAgrupamentoDataHora = gx.date.nullDate() ;
   this.ZV12cAgrupamentoDataHora = gx.date.nullDate() ;
   this.OV12cAgrupamentoDataHora = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10990AgrupamentoEmpresaId = "" ;
   this.O10990AgrupamentoEmpresaId = "" ;
   this.Z10991AgrupamentoNumero = 0 ;
   this.O10991AgrupamentoNumero = 0 ;
   this.Z10992AgrupamentoSituacao = "" ;
   this.O10992AgrupamentoSituacao = "" ;
   this.Z11014AgrupamentoTipo = "" ;
   this.O11014AgrupamentoTipo = "" ;
   this.Z10993AgrupamentoUsuario = "" ;
   this.O10993AgrupamentoUsuario = "" ;
   this.Z11011AgrupamentoUsuarioReceber = "" ;
   this.O11011AgrupamentoUsuarioReceber = "" ;
   this.AV6cAgrupamentoEmpresaId = "" ;
   this.AV7cAgrupamentoNumero = 0 ;
   this.AV8cAgrupamentoSituacao = "" ;
   this.AV9cAgrupamentoTipo = "" ;
   this.AV10cAgrupamentoUsuario = "" ;
   this.AV11cAgrupamentoUsuarioReceber = "" ;
   this.AV12cAgrupamentoDataHora = gx.date.nullDate() ;
   this.AV13pAgrupamentoEmpresaId = "" ;
   this.AV14pAgrupamentoNumero = 0 ;
   this.A11012AgrupamentoDataHora = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A10990AgrupamentoEmpresaId = "" ;
   this.A10991AgrupamentoNumero = 0 ;
   this.A10992AgrupamentoSituacao = "" ;
   this.A11014AgrupamentoTipo = "" ;
   this.A10993AgrupamentoUsuario = "" ;
   this.A11011AgrupamentoUsuarioReceber = "" ;
   this.Events = {"e132b62_client": ["ENTER", true] ,"e142b61_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoEmpresaId',fld:'vCAGRUPAMENTOEMPRESAID'},{av:'AV7cAgrupamentoNumero',fld:'vCAGRUPAMENTONUMERO'},{av:'AV8cAgrupamentoSituacao',fld:'vCAGRUPAMENTOSITUACAO'},{av:'AV9cAgrupamentoTipo',fld:'vCAGRUPAMENTOTIPO'},{av:'AV10cAgrupamentoUsuario',fld:'vCAGRUPAMENTOUSUARIO'},{av:'AV11cAgrupamentoUsuarioReceber',fld:'vCAGRUPAMENTOUSUARIORECEBER'},{av:'AV12cAgrupamentoDataHora',fld:'vCAGRUPAMENTODATAHORA'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10990AgrupamentoEmpresaId',fld:'AGRUPAMENTOEMPRESAID'},{av:'A10991AgrupamentoNumero',fld:'AGRUPAMENTONUMERO'}],[{av:'AV13pAgrupamentoEmpresaId',fld:'vPAGRUPAMENTOEMPRESAID'},{av:'AV14pAgrupamentoNumero',fld:'vPAGRUPAMENTONUMERO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoEmpresaId',fld:'vCAGRUPAMENTOEMPRESAID'},{av:'AV7cAgrupamentoNumero',fld:'vCAGRUPAMENTONUMERO'},{av:'AV8cAgrupamentoSituacao',fld:'vCAGRUPAMENTOSITUACAO'},{av:'AV9cAgrupamentoTipo',fld:'vCAGRUPAMENTOTIPO'},{av:'AV10cAgrupamentoUsuario',fld:'vCAGRUPAMENTOUSUARIO'},{av:'AV11cAgrupamentoUsuarioReceber',fld:'vCAGRUPAMENTOUSUARIORECEBER'},{av:'AV12cAgrupamentoDataHora',fld:'vCAGRUPAMENTODATAHORA'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoEmpresaId',fld:'vCAGRUPAMENTOEMPRESAID'},{av:'AV7cAgrupamentoNumero',fld:'vCAGRUPAMENTONUMERO'},{av:'AV8cAgrupamentoSituacao',fld:'vCAGRUPAMENTOSITUACAO'},{av:'AV9cAgrupamentoTipo',fld:'vCAGRUPAMENTOTIPO'},{av:'AV10cAgrupamentoUsuario',fld:'vCAGRUPAMENTOUSUARIO'},{av:'AV11cAgrupamentoUsuarioReceber',fld:'vCAGRUPAMENTOUSUARIORECEBER'},{av:'AV12cAgrupamentoDataHora',fld:'vCAGRUPAMENTODATAHORA'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoEmpresaId',fld:'vCAGRUPAMENTOEMPRESAID'},{av:'AV7cAgrupamentoNumero',fld:'vCAGRUPAMENTONUMERO'},{av:'AV8cAgrupamentoSituacao',fld:'vCAGRUPAMENTOSITUACAO'},{av:'AV9cAgrupamentoTipo',fld:'vCAGRUPAMENTOTIPO'},{av:'AV10cAgrupamentoUsuario',fld:'vCAGRUPAMENTOUSUARIO'},{av:'AV11cAgrupamentoUsuarioReceber',fld:'vCAGRUPAMENTOUSUARIORECEBER'},{av:'AV12cAgrupamentoDataHora',fld:'vCAGRUPAMENTODATAHORA'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgrupamentoEmpresaId',fld:'vCAGRUPAMENTOEMPRESAID'},{av:'AV7cAgrupamentoNumero',fld:'vCAGRUPAMENTONUMERO'},{av:'AV8cAgrupamentoSituacao',fld:'vCAGRUPAMENTOSITUACAO'},{av:'AV9cAgrupamentoTipo',fld:'vCAGRUPAMENTOTIPO'},{av:'AV10cAgrupamentoUsuario',fld:'vCAGRUPAMENTOUSUARIO'},{av:'AV11cAgrupamentoUsuarioReceber',fld:'vCAGRUPAMENTOUSUARIORECEBER'},{av:'AV12cAgrupamentoDataHora',fld:'vCAGRUPAMENTODATAHORA'}],[]];
   this.setVCMap("AV13pAgrupamentoEmpresaId", "vPAGRUPAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV14pAgrupamentoNumero", "vPAGRUPAMENTONUMERO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0md0());