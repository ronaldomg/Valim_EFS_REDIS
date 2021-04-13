/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:24.28
*/
gx.evt.autoSkip = false;
gx.define('gx0a00', false, function () {
   this.ServerClass =  "gx0a00" ;
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
      this.AV13pRemessaRetornoEmpresaId=gx.fn.getControlValue("vPREMESSARETORNOEMPRESAID") ;
      this.AV14pRemessaRetornoId=gx.fn.getIntegerValue("vPREMESSARETORNOID",'.') ;
      this.AV15pOcorrenciaRetornoId=gx.fn.getIntegerValue("vPOCORRENCIARETORNOID",'.') ;
      this.AV16pMotivoOcorrenciaId=gx.fn.getIntegerValue("vPMOTIVOOCORRENCIAID",'.') ;
   };
   this.e131np2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141np1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0a00",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2784,53,"REMESSARETORNOEMPRESAID","Empresa","","RemessaRetornoEmpresaId","char",0,"px",10,10,"left",null,[],2784,"RemessaRetornoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2785,54,"REMESSARETORNOID","Código","","RemessaRetornoId","int",0,"px",4,4,"right",null,[],2785,"RemessaRetornoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2804,55,"OCORRENCIARETORNOID","Código da Ocorrência","","OcorrenciaRetornoId","int",0,"px",4,4,"right",null,[],2804,"OcorrenciaRetornoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2984,56,"MOTIVOOCORRENCIAID","Código","","MotivoOcorrenciaId","int",0,"px",4,4,"right",null,[],2984,"MotivoOcorrenciaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2985,57,"MOTIVOOCORRENCIADESCRICAO","Descrição","Selecionar","MotivoOcorrenciaDescricao","svchar",0,"px",60,60,"left",null,[],2985,"MotivoOcorrenciaDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2986,58,"MOTIVOOCORRENCIAUSUARIOALT","Usuário de Alteração","","MotivoOcorrenciaUsuarioAlt","char",0,"px",12,12,"left",null,[],2986,"MotivoOcorrenciaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKREMESSARETORNOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOEMPRESAID",gxz:"ZV6cRemessaRetornoEmpresaId",gxold:"OV6cRemessaRetornoEmpresaId",gxvar:"AV6cRemessaRetornoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cRemessaRetornoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cRemessaRetornoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOEMPRESAID",gx.O.AV6cRemessaRetornoEmpresaId,0)},c2v:function(){gx.O.AV6cRemessaRetornoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKREMESSARETORNOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOID",gxz:"ZV7cRemessaRetornoId",gxold:"OV7cRemessaRetornoId",gxvar:"AV7cRemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cRemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cRemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOID",gx.O.AV7cRemessaRetornoId,0)},c2v:function(){gx.O.AV7cRemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKOCORRENCIARETORNOID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCOCORRENCIARETORNOID",gxz:"ZV8cOcorrenciaRetornoId",gxold:"OV8cOcorrenciaRetornoId",gxvar:"AV8cOcorrenciaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cOcorrenciaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cOcorrenciaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOCORRENCIARETORNOID",gx.O.AV8cOcorrenciaRetornoId,0)},c2v:function(){gx.O.AV8cOcorrenciaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOCORRENCIARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKMOTIVOOCORRENCIAID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOTIVOOCORRENCIAID",gxz:"ZV9cMotivoOcorrenciaId",gxold:"OV9cMotivoOcorrenciaId",gxvar:"AV9cMotivoOcorrenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cMotivoOcorrenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cMotivoOcorrenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMOTIVOOCORRENCIAID",gx.O.AV9cMotivoOcorrenciaId,0)},c2v:function(){gx.O.AV9cMotivoOcorrenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMOTIVOOCORRENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKMOTIVOOCORRENCIADESCRICAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOTIVOOCORRENCIADESCRICAO",gxz:"ZV10cMotivoOcorrenciaDescricao",gxold:"OV10cMotivoOcorrenciaDescricao",gxvar:"AV10cMotivoOcorrenciaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cMotivoOcorrenciaDescricao=Value},v2z:function(Value){gx.O.ZV10cMotivoOcorrenciaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCMOTIVOOCORRENCIADESCRICAO",gx.O.AV10cMotivoOcorrenciaDescricao,0)},c2v:function(){gx.O.AV10cMotivoOcorrenciaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCMOTIVOOCORRENCIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKMOTIVOOCORRENCIAUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOTIVOOCORRENCIAUSUARIOALT",gxz:"ZV11cMotivoOcorrenciaUsuarioAlt",gxold:"OV11cMotivoOcorrenciaUsuarioAlt",gxvar:"AV11cMotivoOcorrenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cMotivoOcorrenciaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cMotivoOcorrenciaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCMOTIVOOCORRENCIAUSUARIOALT",gx.O.AV11cMotivoOcorrenciaUsuarioAlt,0)},c2v:function(){gx.O.AV11cMotivoOcorrenciaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCMOTIVOOCORRENCIAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKMOTIVOOCORRENCIADATAALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOTIVOOCORRENCIADATAALT",gxz:"ZV12cMotivoOcorrenciaDataAlt",gxold:"OV12cMotivoOcorrenciaDataAlt",gxvar:"AV12cMotivoOcorrenciaDataAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cMotivoOcorrenciaDataAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cMotivoOcorrenciaDataAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCMOTIVOOCORRENCIADATAALT",gx.O.AV12cMotivoOcorrenciaDataAlt,0)},c2v:function(){gx.O.AV12cMotivoOcorrenciaDataAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCMOTIVOOCORRENCIADATAALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOEMPRESAID",gxz:"Z2784RemessaRetornoEmpresaId",gxold:"O2784RemessaRetornoEmpresaId",gxvar:"A2784RemessaRetornoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2784RemessaRetornoEmpresaId=Value},v2z:function(Value){gx.O.Z2784RemessaRetornoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2784RemessaRetornoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2784RemessaRetornoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOID",gxz:"Z2785RemessaRetornoId",gxold:"O2785RemessaRetornoId",gxvar:"A2785RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2785RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2785RemessaRetornoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2785RemessaRetornoId,0)},c2v:function(){gx.O.A2785RemessaRetornoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"OCORRENCIARETORNOID",gxz:"Z2804OcorrenciaRetornoId",gxold:"O2804OcorrenciaRetornoId",gxvar:"A2804OcorrenciaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2804OcorrenciaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2804OcorrenciaRetornoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OCORRENCIARETORNOID",row || gx.fn.currentGridRowImpl(51),gx.O.A2804OcorrenciaRetornoId,0)},c2v:function(){gx.O.A2804OcorrenciaRetornoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OCORRENCIARETORNOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MOTIVOOCORRENCIAID",gxz:"Z2984MotivoOcorrenciaId",gxold:"O2984MotivoOcorrenciaId",gxvar:"A2984MotivoOcorrenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2984MotivoOcorrenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2984MotivoOcorrenciaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOTIVOOCORRENCIAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2984MotivoOcorrenciaId,0)},c2v:function(){gx.O.A2984MotivoOcorrenciaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOTIVOOCORRENCIAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MOTIVOOCORRENCIADESCRICAO",gxz:"Z2985MotivoOcorrenciaDescricao",gxold:"O2985MotivoOcorrenciaDescricao",gxvar:"A2985MotivoOcorrenciaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2985MotivoOcorrenciaDescricao=Value},v2z:function(Value){gx.O.Z2985MotivoOcorrenciaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MOTIVOOCORRENCIADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A2985MotivoOcorrenciaDescricao,0)},c2v:function(){gx.O.A2985MotivoOcorrenciaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MOTIVOOCORRENCIADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MOTIVOOCORRENCIAUSUARIOALT",gxz:"Z2986MotivoOcorrenciaUsuarioAlt",gxold:"O2986MotivoOcorrenciaUsuarioAlt",gxvar:"A2986MotivoOcorrenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2986MotivoOcorrenciaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2986MotivoOcorrenciaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("MOTIVOOCORRENCIAUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A2986MotivoOcorrenciaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2986MotivoOcorrenciaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("MOTIVOOCORRENCIAUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cRemessaRetornoEmpresaId = "" ;
   this.ZV6cRemessaRetornoEmpresaId = "" ;
   this.OV6cRemessaRetornoEmpresaId = "" ;
   this.AV7cRemessaRetornoId = 0 ;
   this.ZV7cRemessaRetornoId = 0 ;
   this.OV7cRemessaRetornoId = 0 ;
   this.AV8cOcorrenciaRetornoId = 0 ;
   this.ZV8cOcorrenciaRetornoId = 0 ;
   this.OV8cOcorrenciaRetornoId = 0 ;
   this.AV9cMotivoOcorrenciaId = 0 ;
   this.ZV9cMotivoOcorrenciaId = 0 ;
   this.OV9cMotivoOcorrenciaId = 0 ;
   this.AV10cMotivoOcorrenciaDescricao = "" ;
   this.ZV10cMotivoOcorrenciaDescricao = "" ;
   this.OV10cMotivoOcorrenciaDescricao = "" ;
   this.AV11cMotivoOcorrenciaUsuarioAlt = "" ;
   this.ZV11cMotivoOcorrenciaUsuarioAlt = "" ;
   this.OV11cMotivoOcorrenciaUsuarioAlt = "" ;
   this.AV12cMotivoOcorrenciaDataAlt = gx.date.nullDate() ;
   this.ZV12cMotivoOcorrenciaDataAlt = gx.date.nullDate() ;
   this.OV12cMotivoOcorrenciaDataAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2784RemessaRetornoEmpresaId = "" ;
   this.O2784RemessaRetornoEmpresaId = "" ;
   this.Z2785RemessaRetornoId = 0 ;
   this.O2785RemessaRetornoId = 0 ;
   this.Z2804OcorrenciaRetornoId = 0 ;
   this.O2804OcorrenciaRetornoId = 0 ;
   this.Z2984MotivoOcorrenciaId = 0 ;
   this.O2984MotivoOcorrenciaId = 0 ;
   this.Z2985MotivoOcorrenciaDescricao = "" ;
   this.O2985MotivoOcorrenciaDescricao = "" ;
   this.Z2986MotivoOcorrenciaUsuarioAlt = "" ;
   this.O2986MotivoOcorrenciaUsuarioAlt = "" ;
   this.AV6cRemessaRetornoEmpresaId = "" ;
   this.AV7cRemessaRetornoId = 0 ;
   this.AV8cOcorrenciaRetornoId = 0 ;
   this.AV9cMotivoOcorrenciaId = 0 ;
   this.AV10cMotivoOcorrenciaDescricao = "" ;
   this.AV11cMotivoOcorrenciaUsuarioAlt = "" ;
   this.AV12cMotivoOcorrenciaDataAlt = gx.date.nullDate() ;
   this.AV13pRemessaRetornoEmpresaId = "" ;
   this.AV14pRemessaRetornoId = 0 ;
   this.AV15pOcorrenciaRetornoId = 0 ;
   this.AV16pMotivoOcorrenciaId = 0 ;
   this.A2987MotivoOcorrenciaDataAlt = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2804OcorrenciaRetornoId = 0 ;
   this.A2984MotivoOcorrenciaId = 0 ;
   this.A2985MotivoOcorrenciaDescricao = "" ;
   this.A2986MotivoOcorrenciaUsuarioAlt = "" ;
   this.Events = {"e131np2_client": ["ENTER", true] ,"e141np1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cOcorrenciaRetornoId',fld:'vCOCORRENCIARETORNOID'},{av:'AV9cMotivoOcorrenciaId',fld:'vCMOTIVOOCORRENCIAID'},{av:'AV10cMotivoOcorrenciaDescricao',fld:'vCMOTIVOOCORRENCIADESCRICAO'},{av:'AV11cMotivoOcorrenciaUsuarioAlt',fld:'vCMOTIVOOCORRENCIAUSUARIOALT'},{av:'AV12cMotivoOcorrenciaDataAlt',fld:'vCMOTIVOOCORRENCIADATAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID'},{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'},{av:'A2804OcorrenciaRetornoId',fld:'OCORRENCIARETORNOID'},{av:'A2984MotivoOcorrenciaId',fld:'MOTIVOOCORRENCIAID'}],[{av:'AV13pRemessaRetornoEmpresaId',fld:'vPREMESSARETORNOEMPRESAID'},{av:'AV14pRemessaRetornoId',fld:'vPREMESSARETORNOID'},{av:'AV15pOcorrenciaRetornoId',fld:'vPOCORRENCIARETORNOID'},{av:'AV16pMotivoOcorrenciaId',fld:'vPMOTIVOOCORRENCIAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cOcorrenciaRetornoId',fld:'vCOCORRENCIARETORNOID'},{av:'AV9cMotivoOcorrenciaId',fld:'vCMOTIVOOCORRENCIAID'},{av:'AV10cMotivoOcorrenciaDescricao',fld:'vCMOTIVOOCORRENCIADESCRICAO'},{av:'AV11cMotivoOcorrenciaUsuarioAlt',fld:'vCMOTIVOOCORRENCIAUSUARIOALT'},{av:'AV12cMotivoOcorrenciaDataAlt',fld:'vCMOTIVOOCORRENCIADATAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cOcorrenciaRetornoId',fld:'vCOCORRENCIARETORNOID'},{av:'AV9cMotivoOcorrenciaId',fld:'vCMOTIVOOCORRENCIAID'},{av:'AV10cMotivoOcorrenciaDescricao',fld:'vCMOTIVOOCORRENCIADESCRICAO'},{av:'AV11cMotivoOcorrenciaUsuarioAlt',fld:'vCMOTIVOOCORRENCIAUSUARIOALT'},{av:'AV12cMotivoOcorrenciaDataAlt',fld:'vCMOTIVOOCORRENCIADATAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cOcorrenciaRetornoId',fld:'vCOCORRENCIARETORNOID'},{av:'AV9cMotivoOcorrenciaId',fld:'vCMOTIVOOCORRENCIAID'},{av:'AV10cMotivoOcorrenciaDescricao',fld:'vCMOTIVOOCORRENCIADESCRICAO'},{av:'AV11cMotivoOcorrenciaUsuarioAlt',fld:'vCMOTIVOOCORRENCIAUSUARIOALT'},{av:'AV12cMotivoOcorrenciaDataAlt',fld:'vCMOTIVOOCORRENCIADATAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRemessaRetornoEmpresaId',fld:'vCREMESSARETORNOEMPRESAID'},{av:'AV7cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV8cOcorrenciaRetornoId',fld:'vCOCORRENCIARETORNOID'},{av:'AV9cMotivoOcorrenciaId',fld:'vCMOTIVOOCORRENCIAID'},{av:'AV10cMotivoOcorrenciaDescricao',fld:'vCMOTIVOOCORRENCIADESCRICAO'},{av:'AV11cMotivoOcorrenciaUsuarioAlt',fld:'vCMOTIVOOCORRENCIAUSUARIOALT'},{av:'AV12cMotivoOcorrenciaDataAlt',fld:'vCMOTIVOOCORRENCIADATAALT'}],[]];
   this.setVCMap("AV13pRemessaRetornoEmpresaId", "vPREMESSARETORNOEMPRESAID", 0, "char");
   this.setVCMap("AV14pRemessaRetornoId", "vPREMESSARETORNOID", 0, "int");
   this.setVCMap("AV15pOcorrenciaRetornoId", "vPOCORRENCIARETORNOID", 0, "int");
   this.setVCMap("AV16pMotivoOcorrenciaId", "vPMOTIVOOCORRENCIAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0a00());