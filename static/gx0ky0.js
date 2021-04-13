/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:45:21.77
*/
gx.evt.autoSkip = false;
gx.define('gx0ky0', false, function () {
   this.ServerClass =  "gx0ky0" ;
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
      this.AV13pGrupoOcoEmpresaId=gx.fn.getControlValue("vPGRUPOOCOEMPRESAID") ;
      this.AV14pGrupoOcoId=gx.fn.getIntegerValue("vPGRUPOOCOID",'.') ;
   };
   this.e132542_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142541_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ky0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10007,53,"GRUPOOCOEMPRESAID","Empresa Id","","GrupoOcoEmpresaId","char",0,"px",10,10,"left",null,[],10007,"GrupoOcoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10008,54,"GRUPOOCOID","Oco Id","","GrupoOcoId","int",0,"px",2,2,"right",null,[],10008,"GrupoOcoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10094,55,"GRUPOOCODESCRICAO","Oco Descricao","Selecionar","GrupoOcoDescricao","svchar",0,"px",30,30,"left",null,[],10094,"GrupoOcoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10096,56,"GRUPOOCOUSUARIOALT","Usuario Alt","","GrupoOcoUsuarioAlt","char",0,"px",12,12,"left",null,[],10096,"GrupoOcoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10093,57,"GRUPOOCODATAHORAALT","Hora Alt","","GrupoOcoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],10093,"GrupoOcoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10010,58,"GRUPOOCORATEIOID","Rateio Id","","GrupoOcoRateioId","int",0,"px",7,7,"right",null,[],10010,"GrupoOcoRateioId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKGRUPOOCOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOOCOEMPRESAID",gxz:"ZV6cGrupoOcoEmpresaId",gxold:"OV6cGrupoOcoEmpresaId",gxvar:"AV6cGrupoOcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cGrupoOcoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cGrupoOcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOOCOEMPRESAID",gx.O.AV6cGrupoOcoEmpresaId,0)},c2v:function(){gx.O.AV6cGrupoOcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOOCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKGRUPOOCOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"ZZ",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOOCOID",gxz:"ZV7cGrupoOcoId",gxold:"OV7cGrupoOcoId",gxvar:"AV7cGrupoOcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cGrupoOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cGrupoOcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCGRUPOOCOID",gx.O.AV7cGrupoOcoId,0)},c2v:function(){gx.O.AV7cGrupoOcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCGRUPOOCOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKGRUPOOCODESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOOCODESCRICAO",gxz:"ZV8cGrupoOcoDescricao",gxold:"OV8cGrupoOcoDescricao",gxvar:"AV8cGrupoOcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cGrupoOcoDescricao=Value},v2z:function(Value){gx.O.ZV8cGrupoOcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOOCODESCRICAO",gx.O.AV8cGrupoOcoDescricao,0)},c2v:function(){gx.O.AV8cGrupoOcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOOCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKGRUPOOCOUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOOCOUSUARIOALT",gxz:"ZV9cGrupoOcoUsuarioAlt",gxold:"OV9cGrupoOcoUsuarioAlt",gxvar:"AV9cGrupoOcoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cGrupoOcoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cGrupoOcoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOOCOUSUARIOALT",gx.O.AV9cGrupoOcoUsuarioAlt,0)},c2v:function(){gx.O.AV9cGrupoOcoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOOCOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKGRUPOOCODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOOCODATAHORAALT",gxz:"ZV10cGrupoOcoDataHoraAlt",gxold:"OV10cGrupoOcoDataHoraAlt",gxvar:"AV10cGrupoOcoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cGrupoOcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cGrupoOcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCGRUPOOCODATAHORAALT",gx.O.AV10cGrupoOcoDataHoraAlt,0)},c2v:function(){gx.O.AV10cGrupoOcoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCGRUPOOCODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKGRUPOOCOCENCUSEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOOCOCENCUSEMPID",gxz:"ZV11cGrupoOcoCenCusEmpId",gxold:"OV11cGrupoOcoCenCusEmpId",gxvar:"AV11cGrupoOcoCenCusEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cGrupoOcoCenCusEmpId=Value},v2z:function(Value){gx.O.ZV11cGrupoOcoCenCusEmpId=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOOCOCENCUSEMPID",gx.O.AV11cGrupoOcoCenCusEmpId,0)},c2v:function(){gx.O.AV11cGrupoOcoCenCusEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOOCOCENCUSEMPID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKGRUPOOCOCENCUSID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOOCOCENCUSID",gxz:"ZV12cGrupoOcoCenCusId",gxold:"OV12cGrupoOcoCenCusId",gxvar:"AV12cGrupoOcoCenCusId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cGrupoOcoCenCusId=Value},v2z:function(Value){gx.O.ZV12cGrupoOcoCenCusId=Value},v2c:function(){gx.fn.setControlValue("vCGRUPOOCOCENCUSID",gx.O.AV12cGrupoOcoCenCusId,0)},c2v:function(){gx.O.AV12cGrupoOcoCenCusId=this.val()},val:function(){return gx.fn.getControlValue("vCGRUPOOCOCENCUSID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOEMPRESAID",gxz:"Z10007GrupoOcoEmpresaId",gxold:"O10007GrupoOcoEmpresaId",gxvar:"A10007GrupoOcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10007GrupoOcoEmpresaId=Value},v2z:function(Value){gx.O.Z10007GrupoOcoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A10007GrupoOcoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10007GrupoOcoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOOCOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"ZZ",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOID",gxz:"Z10008GrupoOcoId",gxold:"O10008GrupoOcoId",gxvar:"A10008GrupoOcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10008GrupoOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10008GrupoOcoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCOID",row || gx.fn.currentGridRowImpl(51),gx.O.A10008GrupoOcoId,0)},c2v:function(){gx.O.A10008GrupoOcoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOOCOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCODESCRICAO",gxz:"Z10094GrupoOcoDescricao",gxold:"O10094GrupoOcoDescricao",gxvar:"A10094GrupoOcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10094GrupoOcoDescricao=Value},v2z:function(Value){gx.O.Z10094GrupoOcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCODESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A10094GrupoOcoDescricao,0)},c2v:function(){gx.O.A10094GrupoOcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOOCODESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCOUSUARIOALT",gxz:"Z10096GrupoOcoUsuarioAlt",gxold:"O10096GrupoOcoUsuarioAlt",gxvar:"A10096GrupoOcoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10096GrupoOcoUsuarioAlt=Value},v2z:function(Value){gx.O.Z10096GrupoOcoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCOUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A10096GrupoOcoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10096GrupoOcoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("GRUPOOCOUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCODATAHORAALT",gxz:"Z10093GrupoOcoDataHoraAlt",gxold:"O10093GrupoOcoDataHoraAlt",gxvar:"A10093GrupoOcoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10093GrupoOcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10093GrupoOcoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCODATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A10093GrupoOcoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10093GrupoOcoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("GRUPOOCODATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZZ",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOOCORATEIOID",gxz:"Z10010GrupoOcoRateioId",gxold:"O10010GrupoOcoRateioId",gxvar:"A10010GrupoOcoRateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10010GrupoOcoRateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10010GrupoOcoRateioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOOCORATEIOID",row || gx.fn.currentGridRowImpl(51),gx.O.A10010GrupoOcoRateioId,0)},c2v:function(){gx.O.A10010GrupoOcoRateioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOOCORATEIOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cGrupoOcoEmpresaId = "" ;
   this.ZV6cGrupoOcoEmpresaId = "" ;
   this.OV6cGrupoOcoEmpresaId = "" ;
   this.AV7cGrupoOcoId = 0 ;
   this.ZV7cGrupoOcoId = 0 ;
   this.OV7cGrupoOcoId = 0 ;
   this.AV8cGrupoOcoDescricao = "" ;
   this.ZV8cGrupoOcoDescricao = "" ;
   this.OV8cGrupoOcoDescricao = "" ;
   this.AV9cGrupoOcoUsuarioAlt = "" ;
   this.ZV9cGrupoOcoUsuarioAlt = "" ;
   this.OV9cGrupoOcoUsuarioAlt = "" ;
   this.AV10cGrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cGrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.OV10cGrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.AV11cGrupoOcoCenCusEmpId = "" ;
   this.ZV11cGrupoOcoCenCusEmpId = "" ;
   this.OV11cGrupoOcoCenCusEmpId = "" ;
   this.AV12cGrupoOcoCenCusId = "" ;
   this.ZV12cGrupoOcoCenCusId = "" ;
   this.OV12cGrupoOcoCenCusId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10007GrupoOcoEmpresaId = "" ;
   this.O10007GrupoOcoEmpresaId = "" ;
   this.Z10008GrupoOcoId = 0 ;
   this.O10008GrupoOcoId = 0 ;
   this.Z10094GrupoOcoDescricao = "" ;
   this.O10094GrupoOcoDescricao = "" ;
   this.Z10096GrupoOcoUsuarioAlt = "" ;
   this.O10096GrupoOcoUsuarioAlt = "" ;
   this.Z10093GrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.O10093GrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.Z10010GrupoOcoRateioId = 0 ;
   this.O10010GrupoOcoRateioId = 0 ;
   this.AV6cGrupoOcoEmpresaId = "" ;
   this.AV7cGrupoOcoId = 0 ;
   this.AV8cGrupoOcoDescricao = "" ;
   this.AV9cGrupoOcoUsuarioAlt = "" ;
   this.AV10cGrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.AV11cGrupoOcoCenCusEmpId = "" ;
   this.AV12cGrupoOcoCenCusId = "" ;
   this.AV13pGrupoOcoEmpresaId = "" ;
   this.AV14pGrupoOcoId = 0 ;
   this.A10014GrupoOcoCenCusId = "" ;
   this.A10013GrupoOcoCenCusEmpId = "" ;
   this.AV5LinkSelection = "" ;
   this.A10007GrupoOcoEmpresaId = "" ;
   this.A10008GrupoOcoId = 0 ;
   this.A10094GrupoOcoDescricao = "" ;
   this.A10096GrupoOcoUsuarioAlt = "" ;
   this.A10093GrupoOcoDataHoraAlt = gx.date.nullDate() ;
   this.A10010GrupoOcoRateioId = 0 ;
   this.Events = {"e132542_client": ["ENTER", true] ,"e142541_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoOcoEmpresaId',fld:'vCGRUPOOCOEMPRESAID'},{av:'AV7cGrupoOcoId',fld:'vCGRUPOOCOID'},{av:'AV8cGrupoOcoDescricao',fld:'vCGRUPOOCODESCRICAO'},{av:'AV9cGrupoOcoUsuarioAlt',fld:'vCGRUPOOCOUSUARIOALT'},{av:'AV10cGrupoOcoDataHoraAlt',fld:'vCGRUPOOCODATAHORAALT'},{av:'AV11cGrupoOcoCenCusEmpId',fld:'vCGRUPOOCOCENCUSEMPID'},{av:'AV12cGrupoOcoCenCusId',fld:'vCGRUPOOCOCENCUSID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10007GrupoOcoEmpresaId',fld:'GRUPOOCOEMPRESAID'},{av:'A10008GrupoOcoId',fld:'GRUPOOCOID'}],[{av:'AV13pGrupoOcoEmpresaId',fld:'vPGRUPOOCOEMPRESAID'},{av:'AV14pGrupoOcoId',fld:'vPGRUPOOCOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoOcoEmpresaId',fld:'vCGRUPOOCOEMPRESAID'},{av:'AV7cGrupoOcoId',fld:'vCGRUPOOCOID'},{av:'AV8cGrupoOcoDescricao',fld:'vCGRUPOOCODESCRICAO'},{av:'AV9cGrupoOcoUsuarioAlt',fld:'vCGRUPOOCOUSUARIOALT'},{av:'AV10cGrupoOcoDataHoraAlt',fld:'vCGRUPOOCODATAHORAALT'},{av:'AV11cGrupoOcoCenCusEmpId',fld:'vCGRUPOOCOCENCUSEMPID'},{av:'AV12cGrupoOcoCenCusId',fld:'vCGRUPOOCOCENCUSID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoOcoEmpresaId',fld:'vCGRUPOOCOEMPRESAID'},{av:'AV7cGrupoOcoId',fld:'vCGRUPOOCOID'},{av:'AV8cGrupoOcoDescricao',fld:'vCGRUPOOCODESCRICAO'},{av:'AV9cGrupoOcoUsuarioAlt',fld:'vCGRUPOOCOUSUARIOALT'},{av:'AV10cGrupoOcoDataHoraAlt',fld:'vCGRUPOOCODATAHORAALT'},{av:'AV11cGrupoOcoCenCusEmpId',fld:'vCGRUPOOCOCENCUSEMPID'},{av:'AV12cGrupoOcoCenCusId',fld:'vCGRUPOOCOCENCUSID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoOcoEmpresaId',fld:'vCGRUPOOCOEMPRESAID'},{av:'AV7cGrupoOcoId',fld:'vCGRUPOOCOID'},{av:'AV8cGrupoOcoDescricao',fld:'vCGRUPOOCODESCRICAO'},{av:'AV9cGrupoOcoUsuarioAlt',fld:'vCGRUPOOCOUSUARIOALT'},{av:'AV10cGrupoOcoDataHoraAlt',fld:'vCGRUPOOCODATAHORAALT'},{av:'AV11cGrupoOcoCenCusEmpId',fld:'vCGRUPOOCOCENCUSEMPID'},{av:'AV12cGrupoOcoCenCusId',fld:'vCGRUPOOCOCENCUSID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoOcoEmpresaId',fld:'vCGRUPOOCOEMPRESAID'},{av:'AV7cGrupoOcoId',fld:'vCGRUPOOCOID'},{av:'AV8cGrupoOcoDescricao',fld:'vCGRUPOOCODESCRICAO'},{av:'AV9cGrupoOcoUsuarioAlt',fld:'vCGRUPOOCOUSUARIOALT'},{av:'AV10cGrupoOcoDataHoraAlt',fld:'vCGRUPOOCODATAHORAALT'},{av:'AV11cGrupoOcoCenCusEmpId',fld:'vCGRUPOOCOCENCUSEMPID'},{av:'AV12cGrupoOcoCenCusId',fld:'vCGRUPOOCOCENCUSID'}],[]];
   this.setVCMap("AV13pGrupoOcoEmpresaId", "vPGRUPOOCOEMPRESAID", 0, "char");
   this.setVCMap("AV14pGrupoOcoId", "vPGRUPOOCOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ky0());
