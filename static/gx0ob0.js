/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:50.39
*/
gx.evt.autoSkip = false;
gx.define('gx0ob0', false, function () {
   this.ServerClass =  "gx0ob0" ;
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
      this.AV13pLogNFCeEmpresaId=gx.fn.getControlValue("vPLOGNFCEEMPRESAID") ;
      this.AV14pLogNFCePDV=gx.fn.getIntegerValue("vPLOGNFCEPDV",'.') ;
      this.AV15pLogNFCeSaidaId=gx.fn.getIntegerValue("vPLOGNFCESAIDAID",'.') ;
      this.AV16pLogNFCeSequencia=gx.fn.getIntegerValue("vPLOGNFCESEQUENCIA",'.') ;
   };
   this.e132hi2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142hi1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ob0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11815,53,"LOGNFCEEMPRESAID","Empresa Id","","LogNFCeEmpresaId","char",0,"px",10,10,"left",null,[],11815,"LogNFCeEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11816,54,"LOGNFCEPDV","NFCe PDV","","LogNFCePDV","int",0,"px",8,8,"right",null,[],11816,"LogNFCePDV",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11817,55,"LOGNFCESAIDAID","Saida Id","","LogNFCeSaidaId","int",0,"px",8,8,"right",null,[],11817,"LogNFCeSaidaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11818,56,"LOGNFCESEQUENCIA","NFCe Sequencia","","LogNFCeSequencia","int",0,"px",10,10,"right",null,[],11818,"LogNFCeSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11819,57,"LOGNFCESERIE","NFCe Serie","Selecionar","LogNFCeSerie","int",0,"px",4,4,"right",null,[],11819,"LogNFCeSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11820,58,"LOGNFCEDOCUMENTO","NFCe Documento","","LogNFCeDocumento","int",0,"px",10,10,"right",null,[],11820,"LogNFCeDocumento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11821,59,"LOGNFCETIPOERRO","Tipo Erro","","LogNFCeTipoErro","char",0,"px",1,1,"left",null,[],11821,"LogNFCeTipoErro",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKLOGNFCEEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGNFCEEMPRESAID",gxz:"ZV6cLogNFCeEmpresaId",gxold:"OV6cLogNFCeEmpresaId",gxvar:"AV6cLogNFCeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cLogNFCeEmpresaId=Value},v2z:function(Value){gx.O.ZV6cLogNFCeEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCLOGNFCEEMPRESAID",gx.O.AV6cLogNFCeEmpresaId,0)},c2v:function(){gx.O.AV6cLogNFCeEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCLOGNFCEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKLOGNFCEPDV", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGNFCEPDV",gxz:"ZV7cLogNFCePDV",gxold:"OV7cLogNFCePDV",gxvar:"AV7cLogNFCePDV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cLogNFCePDV=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cLogNFCePDV=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLOGNFCEPDV",gx.O.AV7cLogNFCePDV,0)},c2v:function(){gx.O.AV7cLogNFCePDV=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLOGNFCEPDV",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKLOGNFCESAIDAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGNFCESAIDAID",gxz:"ZV8cLogNFCeSaidaId",gxold:"OV8cLogNFCeSaidaId",gxvar:"AV8cLogNFCeSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cLogNFCeSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cLogNFCeSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLOGNFCESAIDAID",gx.O.AV8cLogNFCeSaidaId,0)},c2v:function(){gx.O.AV8cLogNFCeSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLOGNFCESAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKLOGNFCESEQUENCIA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGNFCESEQUENCIA",gxz:"ZV9cLogNFCeSequencia",gxold:"OV9cLogNFCeSequencia",gxvar:"AV9cLogNFCeSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cLogNFCeSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cLogNFCeSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLOGNFCESEQUENCIA",gx.O.AV9cLogNFCeSequencia,0)},c2v:function(){gx.O.AV9cLogNFCeSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLOGNFCESEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKLOGNFCESERIE", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGNFCESERIE",gxz:"ZV10cLogNFCeSerie",gxold:"OV10cLogNFCeSerie",gxvar:"AV10cLogNFCeSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cLogNFCeSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cLogNFCeSerie=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLOGNFCESERIE",gx.O.AV10cLogNFCeSerie,0)},c2v:function(){gx.O.AV10cLogNFCeSerie=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLOGNFCESERIE",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKLOGNFCEDOCUMENTO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGNFCEDOCUMENTO",gxz:"ZV11cLogNFCeDocumento",gxold:"OV11cLogNFCeDocumento",gxvar:"AV11cLogNFCeDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cLogNFCeDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cLogNFCeDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLOGNFCEDOCUMENTO",gx.O.AV11cLogNFCeDocumento,0)},c2v:function(){gx.O.AV11cLogNFCeDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLOGNFCEDOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKLOGNFCETIPOERRO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLOGNFCETIPOERRO",gxz:"ZV12cLogNFCeTipoErro",gxold:"OV12cLogNFCeTipoErro",gxvar:"AV12cLogNFCeTipoErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cLogNFCeTipoErro=Value},v2z:function(Value){gx.O.ZV12cLogNFCeTipoErro=Value},v2c:function(){gx.fn.setControlValue("vCLOGNFCETIPOERRO",gx.O.AV12cLogNFCeTipoErro,0)},c2v:function(){gx.O.AV12cLogNFCeTipoErro=this.val()},val:function(){return gx.fn.getControlValue("vCLOGNFCETIPOERRO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCEEMPRESAID",gxz:"Z11815LogNFCeEmpresaId",gxold:"O11815LogNFCeEmpresaId",gxvar:"A11815LogNFCeEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11815LogNFCeEmpresaId=Value},v2z:function(Value){gx.O.Z11815LogNFCeEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("LOGNFCEEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A11815LogNFCeEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11815LogNFCeEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGNFCEEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCEPDV",gxz:"Z11816LogNFCePDV",gxold:"O11816LogNFCePDV",gxvar:"A11816LogNFCePDV",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11816LogNFCePDV=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11816LogNFCePDV=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOGNFCEPDV",row || gx.fn.currentGridRowImpl(51),gx.O.A11816LogNFCePDV,0)},c2v:function(){gx.O.A11816LogNFCePDV=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOGNFCEPDV",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCESAIDAID",gxz:"Z11817LogNFCeSaidaId",gxold:"O11817LogNFCeSaidaId",gxvar:"A11817LogNFCeSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11817LogNFCeSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11817LogNFCeSaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOGNFCESAIDAID",row || gx.fn.currentGridRowImpl(51),gx.O.A11817LogNFCeSaidaId,0)},c2v:function(){gx.O.A11817LogNFCeSaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOGNFCESAIDAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCESEQUENCIA",gxz:"Z11818LogNFCeSequencia",gxold:"O11818LogNFCeSequencia",gxvar:"A11818LogNFCeSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11818LogNFCeSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11818LogNFCeSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOGNFCESEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A11818LogNFCeSequencia,0)},c2v:function(){gx.O.A11818LogNFCeSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOGNFCESEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCESERIE",gxz:"Z11819LogNFCeSerie",gxold:"O11819LogNFCeSerie",gxvar:"A11819LogNFCeSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11819LogNFCeSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11819LogNFCeSerie=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOGNFCESERIE",row || gx.fn.currentGridRowImpl(51),gx.O.A11819LogNFCeSerie,0)},c2v:function(){gx.O.A11819LogNFCeSerie=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOGNFCESERIE",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCEDOCUMENTO",gxz:"Z11820LogNFCeDocumento",gxold:"O11820LogNFCeDocumento",gxvar:"A11820LogNFCeDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11820LogNFCeDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11820LogNFCeDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LOGNFCEDOCUMENTO",row || gx.fn.currentGridRowImpl(51),gx.O.A11820LogNFCeDocumento,0)},c2v:function(){gx.O.A11820LogNFCeDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LOGNFCEDOCUMENTO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LOGNFCETIPOERRO",gxz:"Z11821LogNFCeTipoErro",gxold:"O11821LogNFCeTipoErro",gxvar:"A11821LogNFCeTipoErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11821LogNFCeTipoErro=Value},v2z:function(Value){gx.O.Z11821LogNFCeTipoErro=Value},v2c:function(row){gx.fn.setGridControlValue("LOGNFCETIPOERRO",row || gx.fn.currentGridRowImpl(51),gx.O.A11821LogNFCeTipoErro,0)},c2v:function(){gx.O.A11821LogNFCeTipoErro=this.val()},val:function(row){return gx.fn.getGridControlValue("LOGNFCETIPOERRO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cLogNFCeEmpresaId = "" ;
   this.ZV6cLogNFCeEmpresaId = "" ;
   this.OV6cLogNFCeEmpresaId = "" ;
   this.AV7cLogNFCePDV = 0 ;
   this.ZV7cLogNFCePDV = 0 ;
   this.OV7cLogNFCePDV = 0 ;
   this.AV8cLogNFCeSaidaId = 0 ;
   this.ZV8cLogNFCeSaidaId = 0 ;
   this.OV8cLogNFCeSaidaId = 0 ;
   this.AV9cLogNFCeSequencia = 0 ;
   this.ZV9cLogNFCeSequencia = 0 ;
   this.OV9cLogNFCeSequencia = 0 ;
   this.AV10cLogNFCeSerie = 0 ;
   this.ZV10cLogNFCeSerie = 0 ;
   this.OV10cLogNFCeSerie = 0 ;
   this.AV11cLogNFCeDocumento = 0 ;
   this.ZV11cLogNFCeDocumento = 0 ;
   this.OV11cLogNFCeDocumento = 0 ;
   this.AV12cLogNFCeTipoErro = "" ;
   this.ZV12cLogNFCeTipoErro = "" ;
   this.OV12cLogNFCeTipoErro = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11815LogNFCeEmpresaId = "" ;
   this.O11815LogNFCeEmpresaId = "" ;
   this.Z11816LogNFCePDV = 0 ;
   this.O11816LogNFCePDV = 0 ;
   this.Z11817LogNFCeSaidaId = 0 ;
   this.O11817LogNFCeSaidaId = 0 ;
   this.Z11818LogNFCeSequencia = 0 ;
   this.O11818LogNFCeSequencia = 0 ;
   this.Z11819LogNFCeSerie = 0 ;
   this.O11819LogNFCeSerie = 0 ;
   this.Z11820LogNFCeDocumento = 0 ;
   this.O11820LogNFCeDocumento = 0 ;
   this.Z11821LogNFCeTipoErro = "" ;
   this.O11821LogNFCeTipoErro = "" ;
   this.AV6cLogNFCeEmpresaId = "" ;
   this.AV7cLogNFCePDV = 0 ;
   this.AV8cLogNFCeSaidaId = 0 ;
   this.AV9cLogNFCeSequencia = 0 ;
   this.AV10cLogNFCeSerie = 0 ;
   this.AV11cLogNFCeDocumento = 0 ;
   this.AV12cLogNFCeTipoErro = "" ;
   this.AV13pLogNFCeEmpresaId = "" ;
   this.AV14pLogNFCePDV = 0 ;
   this.AV15pLogNFCeSaidaId = 0 ;
   this.AV16pLogNFCeSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11815LogNFCeEmpresaId = "" ;
   this.A11816LogNFCePDV = 0 ;
   this.A11817LogNFCeSaidaId = 0 ;
   this.A11818LogNFCeSequencia = 0 ;
   this.A11819LogNFCeSerie = 0 ;
   this.A11820LogNFCeDocumento = 0 ;
   this.A11821LogNFCeTipoErro = "" ;
   this.Events = {"e132hi2_client": ["ENTER", true] ,"e142hi1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogNFCeEmpresaId',fld:'vCLOGNFCEEMPRESAID'},{av:'AV7cLogNFCePDV',fld:'vCLOGNFCEPDV'},{av:'AV8cLogNFCeSaidaId',fld:'vCLOGNFCESAIDAID'},{av:'AV9cLogNFCeSequencia',fld:'vCLOGNFCESEQUENCIA'},{av:'AV10cLogNFCeSerie',fld:'vCLOGNFCESERIE'},{av:'AV11cLogNFCeDocumento',fld:'vCLOGNFCEDOCUMENTO'},{av:'AV12cLogNFCeTipoErro',fld:'vCLOGNFCETIPOERRO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11815LogNFCeEmpresaId',fld:'LOGNFCEEMPRESAID'},{av:'A11816LogNFCePDV',fld:'LOGNFCEPDV'},{av:'A11817LogNFCeSaidaId',fld:'LOGNFCESAIDAID'},{av:'A11818LogNFCeSequencia',fld:'LOGNFCESEQUENCIA'}],[{av:'AV13pLogNFCeEmpresaId',fld:'vPLOGNFCEEMPRESAID'},{av:'AV14pLogNFCePDV',fld:'vPLOGNFCEPDV'},{av:'AV15pLogNFCeSaidaId',fld:'vPLOGNFCESAIDAID'},{av:'AV16pLogNFCeSequencia',fld:'vPLOGNFCESEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogNFCeEmpresaId',fld:'vCLOGNFCEEMPRESAID'},{av:'AV7cLogNFCePDV',fld:'vCLOGNFCEPDV'},{av:'AV8cLogNFCeSaidaId',fld:'vCLOGNFCESAIDAID'},{av:'AV9cLogNFCeSequencia',fld:'vCLOGNFCESEQUENCIA'},{av:'AV10cLogNFCeSerie',fld:'vCLOGNFCESERIE'},{av:'AV11cLogNFCeDocumento',fld:'vCLOGNFCEDOCUMENTO'},{av:'AV12cLogNFCeTipoErro',fld:'vCLOGNFCETIPOERRO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogNFCeEmpresaId',fld:'vCLOGNFCEEMPRESAID'},{av:'AV7cLogNFCePDV',fld:'vCLOGNFCEPDV'},{av:'AV8cLogNFCeSaidaId',fld:'vCLOGNFCESAIDAID'},{av:'AV9cLogNFCeSequencia',fld:'vCLOGNFCESEQUENCIA'},{av:'AV10cLogNFCeSerie',fld:'vCLOGNFCESERIE'},{av:'AV11cLogNFCeDocumento',fld:'vCLOGNFCEDOCUMENTO'},{av:'AV12cLogNFCeTipoErro',fld:'vCLOGNFCETIPOERRO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogNFCeEmpresaId',fld:'vCLOGNFCEEMPRESAID'},{av:'AV7cLogNFCePDV',fld:'vCLOGNFCEPDV'},{av:'AV8cLogNFCeSaidaId',fld:'vCLOGNFCESAIDAID'},{av:'AV9cLogNFCeSequencia',fld:'vCLOGNFCESEQUENCIA'},{av:'AV10cLogNFCeSerie',fld:'vCLOGNFCESERIE'},{av:'AV11cLogNFCeDocumento',fld:'vCLOGNFCEDOCUMENTO'},{av:'AV12cLogNFCeTipoErro',fld:'vCLOGNFCETIPOERRO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLogNFCeEmpresaId',fld:'vCLOGNFCEEMPRESAID'},{av:'AV7cLogNFCePDV',fld:'vCLOGNFCEPDV'},{av:'AV8cLogNFCeSaidaId',fld:'vCLOGNFCESAIDAID'},{av:'AV9cLogNFCeSequencia',fld:'vCLOGNFCESEQUENCIA'},{av:'AV10cLogNFCeSerie',fld:'vCLOGNFCESERIE'},{av:'AV11cLogNFCeDocumento',fld:'vCLOGNFCEDOCUMENTO'},{av:'AV12cLogNFCeTipoErro',fld:'vCLOGNFCETIPOERRO'}],[]];
   this.setVCMap("AV13pLogNFCeEmpresaId", "vPLOGNFCEEMPRESAID", 0, "char");
   this.setVCMap("AV14pLogNFCePDV", "vPLOGNFCEPDV", 0, "int");
   this.setVCMap("AV15pLogNFCeSaidaId", "vPLOGNFCESAIDAID", 0, "int");
   this.setVCMap("AV16pLogNFCeSequencia", "vPLOGNFCESEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ob0());