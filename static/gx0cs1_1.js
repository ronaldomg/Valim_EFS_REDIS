/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:38:3.19
*/
gx.evt.autoSkip = false;
gx.define('gx0cs1_1', false, function () {
   this.ServerClass =  "gx0cs1_1" ;
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
      this.AV13pContratoNumero=gx.fn.getIntegerValue("vPCONTRATONUMERO",'.') ;
      this.AV12pContratoEmpresaId=gx.fn.getControlValue("vPCONTRATOEMPRESAID") ;
   };
   this.e131s72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141s71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,55,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0cs1_1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5288,48,"CONTRATOEMPRESAID","Empresa Contrato","","ContratoEmpresaId","char",0,"px",10,10,"left",null,[],5288,"ContratoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5267,49,"CONTRATOCLIENTEEMPID","Empresa Cliente","","ContratoClienteEmpId","char",0,"px",10,10,"left",null,[],5267,"ContratoClienteEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5268,50,"CONTRATOCLIENTEID","Código Cliente","","ContratoClienteId","int",0,"px",7,7,"right",null,[],5268,"ContratoClienteId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5272,51,"CONTRATOLOTEAMENTOEMPID","Empresa Loteamento","","ContratoLoteamentoEmpId","char",0,"px",10,10,"left",null,[],5272,"ContratoLoteamentoEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5273,52,"CONTRATOLOTEAMENTOID","Código Loteamento","","ContratoLoteamentoId","int",0,"px",3,3,"right",null,[],5273,"ContratoLoteamentoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5276,53,"CONTRATOLOTEAMENTONUMLOTE","Contrato Loteamento Num Lote","","ContratoLoteamentoNumLote","char",0,"px",5,5,"left",null,[],5276,"ContratoLoteamentoNumLote",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5278,54,"CONTRATODTVENDA","Data Venda","","ContratoDtVenda","date",0,"px",10,10,"right",null,[],5278,"ContratoDtVenda",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5289,55,"CONTRATONUMERO","Número Contrato","","ContratoNumero","int",0,"px",8,8,"right",null,[],5289,"ContratoNumero",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCONTRATOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTRATOEMPRESAID",gxz:"ZV6cContratoEmpresaId",gxold:"OV6cContratoEmpresaId",gxvar:"AV6cContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cContratoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cContratoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCONTRATOEMPRESAID",gx.O.AV6cContratoEmpresaId,0)},c2v:function(){gx.O.AV6cContratoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCONTRATOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCONTRATOCLIENTEEMPID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTRATOCLIENTEEMPID",gxz:"ZV7cContratoClienteEmpId",gxold:"OV7cContratoClienteEmpId",gxvar:"AV7cContratoClienteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cContratoClienteEmpId=Value},v2z:function(Value){gx.O.ZV7cContratoClienteEmpId=Value},v2c:function(){gx.fn.setControlValue("vCCONTRATOCLIENTEEMPID",gx.O.AV7cContratoClienteEmpId,0)},c2v:function(){gx.O.AV7cContratoClienteEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCCONTRATOCLIENTEEMPID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCONTRATOCLIENTEID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTRATOCLIENTEID",gxz:"ZV8cContratoClienteId",gxold:"OV8cContratoClienteId",gxvar:"AV8cContratoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cContratoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cContratoClienteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTRATOCLIENTEID",gx.O.AV8cContratoClienteId,0)},c2v:function(){gx.O.AV8cContratoClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTRATOCLIENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCONTRATOLOTEAMENTOEMPID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTRATOLOTEAMENTOEMPID",gxz:"ZV9cContratoLoteamentoEmpId",gxold:"OV9cContratoLoteamentoEmpId",gxvar:"AV9cContratoLoteamentoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cContratoLoteamentoEmpId=Value},v2z:function(Value){gx.O.ZV9cContratoLoteamentoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCCONTRATOLOTEAMENTOEMPID",gx.O.AV9cContratoLoteamentoEmpId,0)},c2v:function(){gx.O.AV9cContratoLoteamentoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCCONTRATOLOTEAMENTOEMPID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCONTRATOLOTEAMENTOID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTRATOLOTEAMENTOID",gxz:"ZV10cContratoLoteamentoId",gxold:"OV10cContratoLoteamentoId",gxvar:"AV10cContratoLoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cContratoLoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cContratoLoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTRATOLOTEAMENTOID",gx.O.AV10cContratoLoteamentoId,0)},c2v:function(){gx.O.AV10cContratoLoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTRATOLOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCONTRATOLOTEAMENTONUMLOTE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTRATOLOTEAMENTONUMLOTE",gxz:"ZV11cContratoLoteamentoNumLote",gxold:"OV11cContratoLoteamentoNumLote",gxvar:"AV11cContratoLoteamentoNumLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cContratoLoteamentoNumLote=Value},v2z:function(Value){gx.O.ZV11cContratoLoteamentoNumLote=Value},v2c:function(){gx.fn.setControlValue("vCCONTRATOLOTEAMENTONUMLOTE",gx.O.AV11cContratoLoteamentoNumLote,0)},c2v:function(){gx.O.AV11cContratoLoteamentoNumLote=this.val()},val:function(){return gx.fn.getControlValue("vCCONTRATOLOTEAMENTONUMLOTE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOEMPRESAID",gxz:"Z5288ContratoEmpresaId",gxold:"O5288ContratoEmpresaId",gxvar:"A5288ContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5288ContratoEmpresaId=Value},v2z:function(Value){gx.O.Z5288ContratoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A5288ContratoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5288ContratoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCLIENTEEMPID",gxz:"Z5267ContratoClienteEmpId",gxold:"O5267ContratoClienteEmpId",gxvar:"A5267ContratoClienteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5267ContratoClienteEmpId=Value},v2z:function(Value){gx.O.Z5267ContratoClienteEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOCLIENTEEMPID",row || gx.fn.currentGridRowImpl(46),gx.O.A5267ContratoClienteEmpId,0)},c2v:function(){gx.O.A5267ContratoClienteEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOCLIENTEEMPID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOCLIENTEID",gxz:"Z5268ContratoClienteId",gxold:"O5268ContratoClienteId",gxvar:"A5268ContratoClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5268ContratoClienteId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5268ContratoClienteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRATOCLIENTEID",row || gx.fn.currentGridRowImpl(46),gx.O.A5268ContratoClienteId,0)},c2v:function(){gx.O.A5268ContratoClienteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTRATOCLIENTEID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTOEMPID",gxz:"Z5272ContratoLoteamentoEmpId",gxold:"O5272ContratoLoteamentoEmpId",gxvar:"A5272ContratoLoteamentoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5272ContratoLoteamentoEmpId=Value},v2z:function(Value){gx.O.Z5272ContratoLoteamentoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOLOTEAMENTOEMPID",row || gx.fn.currentGridRowImpl(46),gx.O.A5272ContratoLoteamentoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5272ContratoLoteamentoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOLOTEAMENTOEMPID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTOID",gxz:"Z5273ContratoLoteamentoId",gxold:"O5273ContratoLoteamentoId",gxvar:"A5273ContratoLoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5273ContratoLoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5273ContratoLoteamentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRATOLOTEAMENTOID",row || gx.fn.currentGridRowImpl(46),gx.O.A5273ContratoLoteamentoId,0)},c2v:function(){gx.O.A5273ContratoLoteamentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTRATOLOTEAMENTOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATOLOTEAMENTONUMLOTE",gxz:"Z5276ContratoLoteamentoNumLote",gxold:"O5276ContratoLoteamentoNumLote",gxvar:"A5276ContratoLoteamentoNumLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5276ContratoLoteamentoNumLote=Value},v2z:function(Value){gx.O.Z5276ContratoLoteamentoNumLote=Value},v2c:function(row){gx.fn.setGridControlValue("CONTRATOLOTEAMENTONUMLOTE",row || gx.fn.currentGridRowImpl(46),gx.O.A5276ContratoLoteamentoNumLote,0)},c2v:function(){gx.O.A5276ContratoLoteamentoNumLote=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTRATOLOTEAMENTONUMLOTE",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATODTVENDA",gxz:"Z5278ContratoDtVenda",gxold:"O5278ContratoDtVenda",gxvar:"A5278ContratoDtVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5278ContratoDtVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5278ContratoDtVenda=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRATODTVENDA",row || gx.fn.currentGridRowImpl(46),gx.O.A5278ContratoDtVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5278ContratoDtVenda=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTRATODTVENDA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTRATONUMERO",gxz:"Z5289ContratoNumero",gxold:"O5289ContratoNumero",gxvar:"A5289ContratoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5289ContratoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5289ContratoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTRATONUMERO",row || gx.fn.currentGridRowImpl(46),gx.O.A5289ContratoNumero,0)},c2v:function(){gx.O.A5289ContratoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTRATONUMERO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   this.AV6cContratoEmpresaId = "" ;
   this.ZV6cContratoEmpresaId = "" ;
   this.OV6cContratoEmpresaId = "" ;
   this.AV7cContratoClienteEmpId = "" ;
   this.ZV7cContratoClienteEmpId = "" ;
   this.OV7cContratoClienteEmpId = "" ;
   this.AV8cContratoClienteId = 0 ;
   this.ZV8cContratoClienteId = 0 ;
   this.OV8cContratoClienteId = 0 ;
   this.AV9cContratoLoteamentoEmpId = "" ;
   this.ZV9cContratoLoteamentoEmpId = "" ;
   this.OV9cContratoLoteamentoEmpId = "" ;
   this.AV10cContratoLoteamentoId = 0 ;
   this.ZV10cContratoLoteamentoId = 0 ;
   this.OV10cContratoLoteamentoId = 0 ;
   this.AV11cContratoLoteamentoNumLote = "" ;
   this.ZV11cContratoLoteamentoNumLote = "" ;
   this.OV11cContratoLoteamentoNumLote = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5288ContratoEmpresaId = "" ;
   this.O5288ContratoEmpresaId = "" ;
   this.Z5267ContratoClienteEmpId = "" ;
   this.O5267ContratoClienteEmpId = "" ;
   this.Z5268ContratoClienteId = 0 ;
   this.O5268ContratoClienteId = 0 ;
   this.Z5272ContratoLoteamentoEmpId = "" ;
   this.O5272ContratoLoteamentoEmpId = "" ;
   this.Z5273ContratoLoteamentoId = 0 ;
   this.O5273ContratoLoteamentoId = 0 ;
   this.Z5276ContratoLoteamentoNumLote = "" ;
   this.O5276ContratoLoteamentoNumLote = "" ;
   this.Z5278ContratoDtVenda = gx.date.nullDate() ;
   this.O5278ContratoDtVenda = gx.date.nullDate() ;
   this.Z5289ContratoNumero = 0 ;
   this.O5289ContratoNumero = 0 ;
   this.AV6cContratoEmpresaId = "" ;
   this.AV7cContratoClienteEmpId = "" ;
   this.AV8cContratoClienteId = 0 ;
   this.AV9cContratoLoteamentoEmpId = "" ;
   this.AV10cContratoLoteamentoId = 0 ;
   this.AV11cContratoLoteamentoNumLote = "" ;
   this.AV12pContratoEmpresaId = "" ;
   this.AV13pContratoNumero = 0 ;
   this.AV5LinkSelection = "" ;
   this.A5288ContratoEmpresaId = "" ;
   this.A5267ContratoClienteEmpId = "" ;
   this.A5268ContratoClienteId = 0 ;
   this.A5272ContratoLoteamentoEmpId = "" ;
   this.A5273ContratoLoteamentoId = 0 ;
   this.A5276ContratoLoteamentoNumLote = "" ;
   this.A5278ContratoDtVenda = gx.date.nullDate() ;
   this.A5289ContratoNumero = 0 ;
   this.Events = {"e131s72_client": ["ENTER", true] ,"e141s71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContratoEmpresaId',fld:'vCCONTRATOEMPRESAID'},{av:'AV7cContratoClienteEmpId',fld:'vCCONTRATOCLIENTEEMPID'},{av:'AV8cContratoClienteId',fld:'vCCONTRATOCLIENTEID'},{av:'AV9cContratoLoteamentoEmpId',fld:'vCCONTRATOLOTEAMENTOEMPID'},{av:'AV10cContratoLoteamentoId',fld:'vCCONTRATOLOTEAMENTOID'},{av:'AV11cContratoLoteamentoNumLote',fld:'vCCONTRATOLOTEAMENTONUMLOTE'},{av:'AV13pContratoNumero',fld:'vPCONTRATONUMERO',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5288ContratoEmpresaId',fld:'CONTRATOEMPRESAID'}],[{av:'AV12pContratoEmpresaId',fld:'vPCONTRATOEMPRESAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContratoEmpresaId',fld:'vCCONTRATOEMPRESAID'},{av:'AV7cContratoClienteEmpId',fld:'vCCONTRATOCLIENTEEMPID'},{av:'AV8cContratoClienteId',fld:'vCCONTRATOCLIENTEID'},{av:'AV9cContratoLoteamentoEmpId',fld:'vCCONTRATOLOTEAMENTOEMPID'},{av:'AV10cContratoLoteamentoId',fld:'vCCONTRATOLOTEAMENTOID'},{av:'AV11cContratoLoteamentoNumLote',fld:'vCCONTRATOLOTEAMENTONUMLOTE'},{av:'AV13pContratoNumero',fld:'vPCONTRATONUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContratoEmpresaId',fld:'vCCONTRATOEMPRESAID'},{av:'AV7cContratoClienteEmpId',fld:'vCCONTRATOCLIENTEEMPID'},{av:'AV8cContratoClienteId',fld:'vCCONTRATOCLIENTEID'},{av:'AV9cContratoLoteamentoEmpId',fld:'vCCONTRATOLOTEAMENTOEMPID'},{av:'AV10cContratoLoteamentoId',fld:'vCCONTRATOLOTEAMENTOID'},{av:'AV11cContratoLoteamentoNumLote',fld:'vCCONTRATOLOTEAMENTONUMLOTE'},{av:'AV13pContratoNumero',fld:'vPCONTRATONUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContratoEmpresaId',fld:'vCCONTRATOEMPRESAID'},{av:'AV7cContratoClienteEmpId',fld:'vCCONTRATOCLIENTEEMPID'},{av:'AV8cContratoClienteId',fld:'vCCONTRATOCLIENTEID'},{av:'AV9cContratoLoteamentoEmpId',fld:'vCCONTRATOLOTEAMENTOEMPID'},{av:'AV10cContratoLoteamentoId',fld:'vCCONTRATOLOTEAMENTOID'},{av:'AV11cContratoLoteamentoNumLote',fld:'vCCONTRATOLOTEAMENTONUMLOTE'},{av:'AV13pContratoNumero',fld:'vPCONTRATONUMERO',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContratoEmpresaId',fld:'vCCONTRATOEMPRESAID'},{av:'AV7cContratoClienteEmpId',fld:'vCCONTRATOCLIENTEEMPID'},{av:'AV8cContratoClienteId',fld:'vCCONTRATOCLIENTEID'},{av:'AV9cContratoLoteamentoEmpId',fld:'vCCONTRATOLOTEAMENTOEMPID'},{av:'AV10cContratoLoteamentoId',fld:'vCCONTRATOLOTEAMENTOID'},{av:'AV11cContratoLoteamentoNumLote',fld:'vCCONTRATOLOTEAMENTONUMLOTE'},{av:'AV13pContratoNumero',fld:'vPCONTRATONUMERO',hsh:true}],[]];
   this.setVCMap("AV13pContratoNumero", "vPCONTRATONUMERO", 0, "int");
   this.setVCMap("AV12pContratoEmpresaId", "vPCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV13pContratoNumero", "vPCONTRATONUMERO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV13pContratoNumero"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0cs1_1());
