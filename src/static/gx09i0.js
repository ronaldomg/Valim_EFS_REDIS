/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:47.51
*/
gx.evt.autoSkip = false;
gx.define('gx09i0', false, function () {
   this.ServerClass =  "gx09i0" ;
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
      this.AV13pTipoPermissaoId=gx.fn.getIntegerValue("vPTIPOPERMISSAOID",'.') ;
      this.AV14pPermissaoConcSeq=gx.fn.getIntegerValue("vPPERMISSAOCONCSEQ",'.') ;
   };
   this.e131nz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141nz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx09i0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(568,53,"TIPOPERMISSAOID","Código Tipo Termissão","","TipoPermissaoId","int",0,"px",4,4,"right",null,[],568,"TipoPermissaoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3143,54,"PERMISSAOCONCSEQ","Sequência","","PermissaoConcSeq","int",0,"px",8,8,"right",null,[],3143,"PermissaoConcSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3144,55,"PERMISSAOCONCDATAHORASOL","Data/Hora Solicitação","Selecionar","PermissaoConcDataHoraSol","dtime",0,"px",16,16,"right",null,[],3144,"PermissaoConcDataHoraSol",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3139,56,"PERMISSAOUSUARIOSOLID","Usuário Solicitou","","PermissaoUsuarioSolId","char",0,"px",12,12,"left",null,[],3139,"PermissaoUsuarioSolId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3145,57,"PERMISSAOCONCDATAHORALIB","Data/Hora Liberação","","PermissaoConcDataHoraLib","dtime",0,"px",16,16,"right",null,[],3145,"PermissaoConcDataHoraLib",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3141,58,"PERMISSAOUSUARIOLIBID","Usuário Liberou","","PermissaoUsuarioLibId","char",0,"px",12,12,"left",null,[],3141,"PermissaoUsuarioLibId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3149,59,"PERMISSAOCONCEMPRESAID","Empresa","","PermissaoConcEmpresaId","char",0,"px",10,10,"left",null,[],3149,"PermissaoConcEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3150,60,"PERMISSAOCONCPROGRAMASISTEMA","Sistema","","PermissaoConcProgramaSistema","char",0,"px",8,8,"left",null,[],3150,"PermissaoConcProgramaSistema",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOPERMISSAOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOPERMISSAOID",gxz:"ZV6cTipoPermissaoId",gxold:"OV6cTipoPermissaoId",gxvar:"AV6cTipoPermissaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoPermissaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cTipoPermissaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOPERMISSAOID",gx.O.AV6cTipoPermissaoId,0)},c2v:function(){gx.O.AV6cTipoPermissaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOPERMISSAOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPERMISSAOCONCSEQ", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOCONCSEQ",gxz:"ZV7cPermissaoConcSeq",gxold:"OV7cPermissaoConcSeq",gxvar:"AV7cPermissaoConcSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPermissaoConcSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cPermissaoConcSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPERMISSAOCONCSEQ",gx.O.AV7cPermissaoConcSeq,0)},c2v:function(){gx.O.AV7cPermissaoConcSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPERMISSAOCONCSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPERMISSAOCONCDATAHORASOL", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOCONCDATAHORASOL",gxz:"ZV8cPermissaoConcDataHoraSol",gxold:"OV8cPermissaoConcDataHoraSol",gxvar:"AV8cPermissaoConcDataHoraSol",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cPermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPERMISSAOCONCDATAHORASOL",gx.O.AV8cPermissaoConcDataHoraSol,0)},c2v:function(){gx.O.AV8cPermissaoConcDataHoraSol=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPERMISSAOCONCDATAHORASOL")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPERMISSAOUSUARIOSOLID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUARIOSOLID",gxz:"ZV9cPermissaoUsuarioSolId",gxold:"OV9cPermissaoUsuarioSolId",gxvar:"AV9cPermissaoUsuarioSolId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPermissaoUsuarioSolId=Value},v2z:function(Value){gx.O.ZV9cPermissaoUsuarioSolId=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUARIOSOLID",gx.O.AV9cPermissaoUsuarioSolId,0)},c2v:function(){gx.O.AV9cPermissaoUsuarioSolId=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUARIOSOLID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPERMISSAOCONCDATAHORALIB", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOCONCDATAHORALIB",gxz:"ZV10cPermissaoConcDataHoraLib",gxold:"OV10cPermissaoConcDataHoraLib",gxvar:"AV10cPermissaoConcDataHoraLib",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPermissaoConcDataHoraLib=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cPermissaoConcDataHoraLib=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPERMISSAOCONCDATAHORALIB",gx.O.AV10cPermissaoConcDataHoraLib,0)},c2v:function(){gx.O.AV10cPermissaoConcDataHoraLib=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPERMISSAOCONCDATAHORALIB")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPERMISSAOUSUARIOLIBID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOUSUARIOLIBID",gxz:"ZV11cPermissaoUsuarioLibId",gxold:"OV11cPermissaoUsuarioLibId",gxvar:"AV11cPermissaoUsuarioLibId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cPermissaoUsuarioLibId=Value},v2z:function(Value){gx.O.ZV11cPermissaoUsuarioLibId=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOUSUARIOLIBID",gx.O.AV11cPermissaoUsuarioLibId,0)},c2v:function(){gx.O.AV11cPermissaoUsuarioLibId=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOUSUARIOLIBID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPERMISSAOCONCUSUARIOALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPERMISSAOCONCUSUARIOALT",gxz:"ZV12cPermissaoConcUsuarioAlt",gxold:"OV12cPermissaoConcUsuarioAlt",gxvar:"AV12cPermissaoConcUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cPermissaoConcUsuarioAlt=Value},v2z:function(Value){gx.O.ZV12cPermissaoConcUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCPERMISSAOCONCUSUARIOALT",gx.O.AV12cPermissaoConcUsuarioAlt,0)},c2v:function(){gx.O.AV12cPermissaoConcUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCPERMISSAOCONCUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOPERMISSAOID",gxz:"Z568TipoPermissaoId",gxold:"O568TipoPermissaoId",gxvar:"A568TipoPermissaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A568TipoPermissaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z568TipoPermissaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOPERMISSAOID",row || gx.fn.currentGridRowImpl(51),gx.O.A568TipoPermissaoId,0)},c2v:function(){gx.O.A568TipoPermissaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOPERMISSAOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCSEQ",gxz:"Z3143PermissaoConcSeq",gxold:"O3143PermissaoConcSeq",gxvar:"A3143PermissaoConcSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3143PermissaoConcSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3143PermissaoConcSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A3143PermissaoConcSeq,0)},c2v:function(){gx.O.A3143PermissaoConcSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PERMISSAOCONCSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCDATAHORASOL",gxz:"Z3144PermissaoConcDataHoraSol",gxold:"O3144PermissaoConcDataHoraSol",gxvar:"A3144PermissaoConcDataHoraSol",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3144PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3144PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCDATAHORASOL",row || gx.fn.currentGridRowImpl(51),gx.O.A3144PermissaoConcDataHoraSol,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3144PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PERMISSAOCONCDATAHORASOL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUARIOSOLID",gxz:"Z3139PermissaoUsuarioSolId",gxold:"O3139PermissaoUsuarioSolId",gxvar:"A3139PermissaoUsuarioSolId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3139PermissaoUsuarioSolId=Value},v2z:function(Value){gx.O.Z3139PermissaoUsuarioSolId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUARIOSOLID",row || gx.fn.currentGridRowImpl(51),gx.O.A3139PermissaoUsuarioSolId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3139PermissaoUsuarioSolId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUARIOSOLID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCDATAHORALIB",gxz:"Z3145PermissaoConcDataHoraLib",gxold:"O3145PermissaoConcDataHoraLib",gxvar:"A3145PermissaoConcDataHoraLib",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3145PermissaoConcDataHoraLib=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3145PermissaoConcDataHoraLib=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCDATAHORALIB",row || gx.fn.currentGridRowImpl(51),gx.O.A3145PermissaoConcDataHoraLib,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3145PermissaoConcDataHoraLib=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PERMISSAOCONCDATAHORALIB",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOUSUARIOLIBID",gxz:"Z3141PermissaoUsuarioLibId",gxold:"O3141PermissaoUsuarioLibId",gxvar:"A3141PermissaoUsuarioLibId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3141PermissaoUsuarioLibId=Value},v2z:function(Value){gx.O.Z3141PermissaoUsuarioLibId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOUSUARIOLIBID",row || gx.fn.currentGridRowImpl(51),gx.O.A3141PermissaoUsuarioLibId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3141PermissaoUsuarioLibId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOUSUARIOLIBID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCEMPRESAID",gxz:"Z3149PermissaoConcEmpresaId",gxold:"O3149PermissaoConcEmpresaId",gxvar:"A3149PermissaoConcEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3149PermissaoConcEmpresaId=Value},v2z:function(Value){gx.O.Z3149PermissaoConcEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A3149PermissaoConcEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3149PermissaoConcEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOCONCEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PERMISSAOCONCPROGRAMASISTEMA",gxz:"Z3150PermissaoConcProgramaSistema",gxold:"O3150PermissaoConcProgramaSistema",gxvar:"A3150PermissaoConcProgramaSistema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3150PermissaoConcProgramaSistema=Value},v2z:function(Value){gx.O.Z3150PermissaoConcProgramaSistema=Value},v2c:function(row){gx.fn.setGridControlValue("PERMISSAOCONCPROGRAMASISTEMA",row || gx.fn.currentGridRowImpl(51),gx.O.A3150PermissaoConcProgramaSistema,0)},c2v:function(){gx.O.A3150PermissaoConcProgramaSistema=this.val()},val:function(row){return gx.fn.getGridControlValue("PERMISSAOCONCPROGRAMASISTEMA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cTipoPermissaoId = 0 ;
   this.ZV6cTipoPermissaoId = 0 ;
   this.OV6cTipoPermissaoId = 0 ;
   this.AV7cPermissaoConcSeq = 0 ;
   this.ZV7cPermissaoConcSeq = 0 ;
   this.OV7cPermissaoConcSeq = 0 ;
   this.AV8cPermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.ZV8cPermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.OV8cPermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.AV9cPermissaoUsuarioSolId = "" ;
   this.ZV9cPermissaoUsuarioSolId = "" ;
   this.OV9cPermissaoUsuarioSolId = "" ;
   this.AV10cPermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.ZV10cPermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.OV10cPermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.AV11cPermissaoUsuarioLibId = "" ;
   this.ZV11cPermissaoUsuarioLibId = "" ;
   this.OV11cPermissaoUsuarioLibId = "" ;
   this.AV12cPermissaoConcUsuarioAlt = "" ;
   this.ZV12cPermissaoConcUsuarioAlt = "" ;
   this.OV12cPermissaoConcUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z568TipoPermissaoId = 0 ;
   this.O568TipoPermissaoId = 0 ;
   this.Z3143PermissaoConcSeq = 0 ;
   this.O3143PermissaoConcSeq = 0 ;
   this.Z3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.O3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.Z3139PermissaoUsuarioSolId = "" ;
   this.O3139PermissaoUsuarioSolId = "" ;
   this.Z3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.O3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.Z3141PermissaoUsuarioLibId = "" ;
   this.O3141PermissaoUsuarioLibId = "" ;
   this.Z3149PermissaoConcEmpresaId = "" ;
   this.O3149PermissaoConcEmpresaId = "" ;
   this.Z3150PermissaoConcProgramaSistema = "" ;
   this.O3150PermissaoConcProgramaSistema = "" ;
   this.AV6cTipoPermissaoId = 0 ;
   this.AV7cPermissaoConcSeq = 0 ;
   this.AV8cPermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.AV9cPermissaoUsuarioSolId = "" ;
   this.AV10cPermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.AV11cPermissaoUsuarioLibId = "" ;
   this.AV12cPermissaoConcUsuarioAlt = "" ;
   this.AV13pTipoPermissaoId = 0 ;
   this.AV14pPermissaoConcSeq = 0 ;
   this.A3147PermissaoConcUsuarioAlt = "" ;
   this.AV5LinkSelection = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.A3143PermissaoConcSeq = 0 ;
   this.A3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.A3139PermissaoUsuarioSolId = "" ;
   this.A3145PermissaoConcDataHoraLib = gx.date.nullDate() ;
   this.A3141PermissaoUsuarioLibId = "" ;
   this.A3149PermissaoConcEmpresaId = "" ;
   this.A3150PermissaoConcProgramaSistema = "" ;
   this.Events = {"e131nz2_client": ["ENTER", true] ,"e141nz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cPermissaoConcSeq',fld:'vCPERMISSAOCONCSEQ'},{av:'AV8cPermissaoConcDataHoraSol',fld:'vCPERMISSAOCONCDATAHORASOL'},{av:'AV9cPermissaoUsuarioSolId',fld:'vCPERMISSAOUSUARIOSOLID'},{av:'AV10cPermissaoConcDataHoraLib',fld:'vCPERMISSAOCONCDATAHORALIB'},{av:'AV11cPermissaoUsuarioLibId',fld:'vCPERMISSAOUSUARIOLIBID'},{av:'AV12cPermissaoConcUsuarioAlt',fld:'vCPERMISSAOCONCUSUARIOALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A3143PermissaoConcSeq',fld:'PERMISSAOCONCSEQ'}],[{av:'AV13pTipoPermissaoId',fld:'vPTIPOPERMISSAOID'},{av:'AV14pPermissaoConcSeq',fld:'vPPERMISSAOCONCSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cPermissaoConcSeq',fld:'vCPERMISSAOCONCSEQ'},{av:'AV8cPermissaoConcDataHoraSol',fld:'vCPERMISSAOCONCDATAHORASOL'},{av:'AV9cPermissaoUsuarioSolId',fld:'vCPERMISSAOUSUARIOSOLID'},{av:'AV10cPermissaoConcDataHoraLib',fld:'vCPERMISSAOCONCDATAHORALIB'},{av:'AV11cPermissaoUsuarioLibId',fld:'vCPERMISSAOUSUARIOLIBID'},{av:'AV12cPermissaoConcUsuarioAlt',fld:'vCPERMISSAOCONCUSUARIOALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cPermissaoConcSeq',fld:'vCPERMISSAOCONCSEQ'},{av:'AV8cPermissaoConcDataHoraSol',fld:'vCPERMISSAOCONCDATAHORASOL'},{av:'AV9cPermissaoUsuarioSolId',fld:'vCPERMISSAOUSUARIOSOLID'},{av:'AV10cPermissaoConcDataHoraLib',fld:'vCPERMISSAOCONCDATAHORALIB'},{av:'AV11cPermissaoUsuarioLibId',fld:'vCPERMISSAOUSUARIOLIBID'},{av:'AV12cPermissaoConcUsuarioAlt',fld:'vCPERMISSAOCONCUSUARIOALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cPermissaoConcSeq',fld:'vCPERMISSAOCONCSEQ'},{av:'AV8cPermissaoConcDataHoraSol',fld:'vCPERMISSAOCONCDATAHORASOL'},{av:'AV9cPermissaoUsuarioSolId',fld:'vCPERMISSAOUSUARIOSOLID'},{av:'AV10cPermissaoConcDataHoraLib',fld:'vCPERMISSAOCONCDATAHORALIB'},{av:'AV11cPermissaoUsuarioLibId',fld:'vCPERMISSAOUSUARIOLIBID'},{av:'AV12cPermissaoConcUsuarioAlt',fld:'vCPERMISSAOCONCUSUARIOALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoPermissaoId',fld:'vCTIPOPERMISSAOID'},{av:'AV7cPermissaoConcSeq',fld:'vCPERMISSAOCONCSEQ'},{av:'AV8cPermissaoConcDataHoraSol',fld:'vCPERMISSAOCONCDATAHORASOL'},{av:'AV9cPermissaoUsuarioSolId',fld:'vCPERMISSAOUSUARIOSOLID'},{av:'AV10cPermissaoConcDataHoraLib',fld:'vCPERMISSAOCONCDATAHORALIB'},{av:'AV11cPermissaoUsuarioLibId',fld:'vCPERMISSAOUSUARIOLIBID'},{av:'AV12cPermissaoConcUsuarioAlt',fld:'vCPERMISSAOCONCUSUARIOALT'}],[]];
   this.setVCMap("AV13pTipoPermissaoId", "vPTIPOPERMISSAOID", 0, "int");
   this.setVCMap("AV14pPermissaoConcSeq", "vPPERMISSAOCONCSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx09i0());