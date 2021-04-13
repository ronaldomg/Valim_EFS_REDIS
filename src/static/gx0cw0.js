/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:37:36.27
*/
gx.evt.autoSkip = false;
gx.define('gx0cw0', false, function () {
   this.ServerClass =  "gx0cw0" ;
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
      this.AV13pModeloContratoEmpresaId=gx.fn.getControlValue("vPMODELOCONTRATOEMPRESAID") ;
      this.AV14pModeloContratoId=gx.fn.getIntegerValue("vPMODELOCONTRATOID",'.') ;
      this.AV15pModeloContratoLayoutSeq=gx.fn.getIntegerValue("vPMODELOCONTRATOLAYOUTSEQ",'.') ;
   };
   this.e131rw2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141rw1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0cw0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5336,53,"MODELOCONTRATOEMPRESAID","Empresa","","ModeloContratoEmpresaId","char",0,"px",10,10,"left",null,[],5336,"ModeloContratoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5337,54,"MODELOCONTRATOID","Código do Modelo","","ModeloContratoId","int",0,"px",3,3,"right",null,[],5337,"ModeloContratoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5343,55,"MODELOCONTRATOLAYOUTSEQ","Sequência","","ModeloContratoLayoutSeq","int",0,"px",3,3,"right",null,[],5343,"ModeloContratoLayoutSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5338,56,"MODELOCONTRATOLAYOUTTIPOCAMPO","Tipo Campo","Selecionar","ModeloContratoLayoutTipoCampo","int",0,"px",2,2,"right",null,[],5338,"ModeloContratoLayoutTipoCampo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5340,57,"MODELOCONTRATOLAYOUTORDEM","Ordem","","ModeloContratoLayoutOrdem","int",0,"px",3,3,"right",null,[],5340,"ModeloContratoLayoutOrdem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5341,58,"MODELOCONTRATOLAYOUTUSUARIOALT","Usuário Alteração","","ModeloContratoLayoutUsuarioAlt","char",0,"px",12,12,"left",null,[],5341,"ModeloContratoLayoutUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5342,59,"MODELOCONTRATOLAYOUTDATAHORAAL","Data/Hora Alteração","","ModeloContratoLayoutDataHoraAl","dtime",0,"px",16,16,"right",null,[],5342,"ModeloContratoLayoutDataHoraAl",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKMODELOCONTRATOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOEMPRESAID",gxz:"ZV6cModeloContratoEmpresaId",gxold:"OV6cModeloContratoEmpresaId",gxvar:"AV6cModeloContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cModeloContratoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cModeloContratoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOEMPRESAID",gx.O.AV6cModeloContratoEmpresaId,0)},c2v:function(){gx.O.AV6cModeloContratoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCMODELOCONTRATOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKMODELOCONTRATOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOID",gxz:"ZV7cModeloContratoId",gxold:"OV7cModeloContratoId",gxvar:"AV7cModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cModeloContratoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOID",gx.O.AV7cModeloContratoId,0)},c2v:function(){gx.O.AV7cModeloContratoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMODELOCONTRATOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKMODELOCONTRATOLAYOUTSEQ", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOLAYOUTSEQ",gxz:"ZV8cModeloContratoLayoutSeq",gxold:"OV8cModeloContratoLayoutSeq",gxvar:"AV8cModeloContratoLayoutSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cModeloContratoLayoutSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cModeloContratoLayoutSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOLAYOUTSEQ",gx.O.AV8cModeloContratoLayoutSeq,0)},c2v:function(){gx.O.AV8cModeloContratoLayoutSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMODELOCONTRATOLAYOUTSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKMODELOCONTRATOLAYOUTTIPOCAMPO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOLAYOUTTIPOCAMPO",gxz:"ZV9cModeloContratoLayoutTipoCampo",gxold:"OV9cModeloContratoLayoutTipoCampo",gxvar:"AV9cModeloContratoLayoutTipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cModeloContratoLayoutTipoCampo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cModeloContratoLayoutTipoCampo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOLAYOUTTIPOCAMPO",gx.O.AV9cModeloContratoLayoutTipoCampo,0)},c2v:function(){gx.O.AV9cModeloContratoLayoutTipoCampo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMODELOCONTRATOLAYOUTTIPOCAMPO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKMODELOCONTRATOLAYOUTORDEM", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOLAYOUTORDEM",gxz:"ZV10cModeloContratoLayoutOrdem",gxold:"OV10cModeloContratoLayoutOrdem",gxvar:"AV10cModeloContratoLayoutOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cModeloContratoLayoutOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cModeloContratoLayoutOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOLAYOUTORDEM",gx.O.AV10cModeloContratoLayoutOrdem,0)},c2v:function(){gx.O.AV10cModeloContratoLayoutOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMODELOCONTRATOLAYOUTORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKMODELOCONTRATOLAYOUTUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOLAYOUTUSUARIOALT",gxz:"ZV11cModeloContratoLayoutUsuarioAlt",gxold:"OV11cModeloContratoLayoutUsuarioAlt",gxvar:"AV11cModeloContratoLayoutUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cModeloContratoLayoutUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cModeloContratoLayoutUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOLAYOUTUSUARIOALT",gx.O.AV11cModeloContratoLayoutUsuarioAlt,0)},c2v:function(){gx.O.AV11cModeloContratoLayoutUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCMODELOCONTRATOLAYOUTUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKMODELOCONTRATOLAYOUTDATAHORAALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMODELOCONTRATOLAYOUTDATAHORAALT",gxz:"ZV12cModeloContratoLayoutDataHoraAlt",gxold:"OV12cModeloContratoLayoutDataHoraAlt",gxvar:"AV12cModeloContratoLayoutDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cModeloContratoLayoutDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cModeloContratoLayoutDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCMODELOCONTRATOLAYOUTDATAHORAALT",gx.O.AV12cModeloContratoLayoutDataHoraAlt,0)},c2v:function(){gx.O.AV12cModeloContratoLayoutDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCMODELOCONTRATOLAYOUTDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOEMPRESAID",gxz:"Z5336ModeloContratoEmpresaId",gxold:"O5336ModeloContratoEmpresaId",gxvar:"A5336ModeloContratoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5336ModeloContratoEmpresaId=Value},v2z:function(Value){gx.O.Z5336ModeloContratoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A5336ModeloContratoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5336ModeloContratoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOCONTRATOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOID",gxz:"Z5337ModeloContratoId",gxold:"O5337ModeloContratoId",gxvar:"A5337ModeloContratoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5337ModeloContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5337ModeloContratoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(51),gx.O.A5337ModeloContratoId,0)},c2v:function(){gx.O.A5337ModeloContratoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTSEQ",gxz:"Z5343ModeloContratoLayoutSeq",gxold:"O5343ModeloContratoLayoutSeq",gxvar:"A5343ModeloContratoLayoutSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5343ModeloContratoLayoutSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5343ModeloContratoLayoutSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOLAYOUTSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A5343ModeloContratoLayoutSeq,0)},c2v:function(){gx.O.A5343ModeloContratoLayoutSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOLAYOUTSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTTIPOCAMPO",gxz:"Z5338ModeloContratoLayoutTipoCampo",gxold:"O5338ModeloContratoLayoutTipoCampo",gxvar:"A5338ModeloContratoLayoutTipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5338ModeloContratoLayoutTipoCampo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5338ModeloContratoLayoutTipoCampo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOLAYOUTTIPOCAMPO",row || gx.fn.currentGridRowImpl(51),gx.O.A5338ModeloContratoLayoutTipoCampo,0)},c2v:function(){gx.O.A5338ModeloContratoLayoutTipoCampo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOLAYOUTTIPOCAMPO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTORDEM",gxz:"Z5340ModeloContratoLayoutOrdem",gxold:"O5340ModeloContratoLayoutOrdem",gxvar:"A5340ModeloContratoLayoutOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5340ModeloContratoLayoutOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5340ModeloContratoLayoutOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOLAYOUTORDEM",row || gx.fn.currentGridRowImpl(51),gx.O.A5340ModeloContratoLayoutOrdem,0)},c2v:function(){gx.O.A5340ModeloContratoLayoutOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOCONTRATOLAYOUTORDEM",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTUSUARIOALT",gxz:"Z5341ModeloContratoLayoutUsuarioAlt",gxold:"O5341ModeloContratoLayoutUsuarioAlt",gxvar:"A5341ModeloContratoLayoutUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5341ModeloContratoLayoutUsuarioAlt=Value},v2z:function(Value){gx.O.Z5341ModeloContratoLayoutUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOLAYOUTUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A5341ModeloContratoLayoutUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5341ModeloContratoLayoutUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOCONTRATOLAYOUTUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MODELOCONTRATOLAYOUTDATAHORAAL",gxz:"Z5342ModeloContratoLayoutDataHoraAl",gxold:"O5342ModeloContratoLayoutDataHoraAl",gxvar:"A5342ModeloContratoLayoutDataHoraAl",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5342ModeloContratoLayoutDataHoraAl=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5342ModeloContratoLayoutDataHoraAl=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOCONTRATOLAYOUTDATAHORAAL",row || gx.fn.currentGridRowImpl(51),gx.O.A5342ModeloContratoLayoutDataHoraAl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5342ModeloContratoLayoutDataHoraAl=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MODELOCONTRATOLAYOUTDATAHORAAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cModeloContratoEmpresaId = "" ;
   this.ZV6cModeloContratoEmpresaId = "" ;
   this.OV6cModeloContratoEmpresaId = "" ;
   this.AV7cModeloContratoId = 0 ;
   this.ZV7cModeloContratoId = 0 ;
   this.OV7cModeloContratoId = 0 ;
   this.AV8cModeloContratoLayoutSeq = 0 ;
   this.ZV8cModeloContratoLayoutSeq = 0 ;
   this.OV8cModeloContratoLayoutSeq = 0 ;
   this.AV9cModeloContratoLayoutTipoCampo = 0 ;
   this.ZV9cModeloContratoLayoutTipoCampo = 0 ;
   this.OV9cModeloContratoLayoutTipoCampo = 0 ;
   this.AV10cModeloContratoLayoutOrdem = 0 ;
   this.ZV10cModeloContratoLayoutOrdem = 0 ;
   this.OV10cModeloContratoLayoutOrdem = 0 ;
   this.AV11cModeloContratoLayoutUsuarioAlt = "" ;
   this.ZV11cModeloContratoLayoutUsuarioAlt = "" ;
   this.OV11cModeloContratoLayoutUsuarioAlt = "" ;
   this.AV12cModeloContratoLayoutDataHoraAlt = gx.date.nullDate() ;
   this.ZV12cModeloContratoLayoutDataHoraAlt = gx.date.nullDate() ;
   this.OV12cModeloContratoLayoutDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5336ModeloContratoEmpresaId = "" ;
   this.O5336ModeloContratoEmpresaId = "" ;
   this.Z5337ModeloContratoId = 0 ;
   this.O5337ModeloContratoId = 0 ;
   this.Z5343ModeloContratoLayoutSeq = 0 ;
   this.O5343ModeloContratoLayoutSeq = 0 ;
   this.Z5338ModeloContratoLayoutTipoCampo = 0 ;
   this.O5338ModeloContratoLayoutTipoCampo = 0 ;
   this.Z5340ModeloContratoLayoutOrdem = 0 ;
   this.O5340ModeloContratoLayoutOrdem = 0 ;
   this.Z5341ModeloContratoLayoutUsuarioAlt = "" ;
   this.O5341ModeloContratoLayoutUsuarioAlt = "" ;
   this.Z5342ModeloContratoLayoutDataHoraAl = gx.date.nullDate() ;
   this.O5342ModeloContratoLayoutDataHoraAl = gx.date.nullDate() ;
   this.AV6cModeloContratoEmpresaId = "" ;
   this.AV7cModeloContratoId = 0 ;
   this.AV8cModeloContratoLayoutSeq = 0 ;
   this.AV9cModeloContratoLayoutTipoCampo = 0 ;
   this.AV10cModeloContratoLayoutOrdem = 0 ;
   this.AV11cModeloContratoLayoutUsuarioAlt = "" ;
   this.AV12cModeloContratoLayoutDataHoraAlt = gx.date.nullDate() ;
   this.AV13pModeloContratoEmpresaId = "" ;
   this.AV14pModeloContratoId = 0 ;
   this.AV15pModeloContratoLayoutSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A5336ModeloContratoEmpresaId = "" ;
   this.A5337ModeloContratoId = 0 ;
   this.A5343ModeloContratoLayoutSeq = 0 ;
   this.A5338ModeloContratoLayoutTipoCampo = 0 ;
   this.A5340ModeloContratoLayoutOrdem = 0 ;
   this.A5341ModeloContratoLayoutUsuarioAlt = "" ;
   this.A5342ModeloContratoLayoutDataHoraAl = gx.date.nullDate() ;
   this.Events = {"e131rw2_client": ["ENTER", true] ,"e141rw1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoLayoutSeq',fld:'vCMODELOCONTRATOLAYOUTSEQ'},{av:'AV9cModeloContratoLayoutTipoCampo',fld:'vCMODELOCONTRATOLAYOUTTIPOCAMPO'},{av:'AV10cModeloContratoLayoutOrdem',fld:'vCMODELOCONTRATOLAYOUTORDEM'},{av:'AV11cModeloContratoLayoutUsuarioAlt',fld:'vCMODELOCONTRATOLAYOUTUSUARIOALT'},{av:'AV12cModeloContratoLayoutDataHoraAlt',fld:'vCMODELOCONTRATOLAYOUTDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5336ModeloContratoEmpresaId',fld:'MODELOCONTRATOEMPRESAID'},{av:'A5337ModeloContratoId',fld:'MODELOCONTRATOID'},{av:'A5343ModeloContratoLayoutSeq',fld:'MODELOCONTRATOLAYOUTSEQ'}],[{av:'AV13pModeloContratoEmpresaId',fld:'vPMODELOCONTRATOEMPRESAID'},{av:'AV14pModeloContratoId',fld:'vPMODELOCONTRATOID'},{av:'AV15pModeloContratoLayoutSeq',fld:'vPMODELOCONTRATOLAYOUTSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoLayoutSeq',fld:'vCMODELOCONTRATOLAYOUTSEQ'},{av:'AV9cModeloContratoLayoutTipoCampo',fld:'vCMODELOCONTRATOLAYOUTTIPOCAMPO'},{av:'AV10cModeloContratoLayoutOrdem',fld:'vCMODELOCONTRATOLAYOUTORDEM'},{av:'AV11cModeloContratoLayoutUsuarioAlt',fld:'vCMODELOCONTRATOLAYOUTUSUARIOALT'},{av:'AV12cModeloContratoLayoutDataHoraAlt',fld:'vCMODELOCONTRATOLAYOUTDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoLayoutSeq',fld:'vCMODELOCONTRATOLAYOUTSEQ'},{av:'AV9cModeloContratoLayoutTipoCampo',fld:'vCMODELOCONTRATOLAYOUTTIPOCAMPO'},{av:'AV10cModeloContratoLayoutOrdem',fld:'vCMODELOCONTRATOLAYOUTORDEM'},{av:'AV11cModeloContratoLayoutUsuarioAlt',fld:'vCMODELOCONTRATOLAYOUTUSUARIOALT'},{av:'AV12cModeloContratoLayoutDataHoraAlt',fld:'vCMODELOCONTRATOLAYOUTDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoLayoutSeq',fld:'vCMODELOCONTRATOLAYOUTSEQ'},{av:'AV9cModeloContratoLayoutTipoCampo',fld:'vCMODELOCONTRATOLAYOUTTIPOCAMPO'},{av:'AV10cModeloContratoLayoutOrdem',fld:'vCMODELOCONTRATOLAYOUTORDEM'},{av:'AV11cModeloContratoLayoutUsuarioAlt',fld:'vCMODELOCONTRATOLAYOUTUSUARIOALT'},{av:'AV12cModeloContratoLayoutDataHoraAlt',fld:'vCMODELOCONTRATOLAYOUTDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cModeloContratoEmpresaId',fld:'vCMODELOCONTRATOEMPRESAID'},{av:'AV7cModeloContratoId',fld:'vCMODELOCONTRATOID'},{av:'AV8cModeloContratoLayoutSeq',fld:'vCMODELOCONTRATOLAYOUTSEQ'},{av:'AV9cModeloContratoLayoutTipoCampo',fld:'vCMODELOCONTRATOLAYOUTTIPOCAMPO'},{av:'AV10cModeloContratoLayoutOrdem',fld:'vCMODELOCONTRATOLAYOUTORDEM'},{av:'AV11cModeloContratoLayoutUsuarioAlt',fld:'vCMODELOCONTRATOLAYOUTUSUARIOALT'},{av:'AV12cModeloContratoLayoutDataHoraAlt',fld:'vCMODELOCONTRATOLAYOUTDATAHORAALT'}],[]];
   this.setVCMap("AV13pModeloContratoEmpresaId", "vPMODELOCONTRATOEMPRESAID", 0, "char");
   this.setVCMap("AV14pModeloContratoId", "vPMODELOCONTRATOID", 0, "int");
   this.setVCMap("AV15pModeloContratoLayoutSeq", "vPMODELOCONTRATOLAYOUTSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0cw0());