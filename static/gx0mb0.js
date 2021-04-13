/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:1.5
*/
gx.evt.autoSkip = false;
gx.define('gx0mb0', false, function () {
   this.ServerClass =  "gx0mb0" ;
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
      this.AV13pEntradaItemSTEmpresaId=gx.fn.getControlValue("vPENTRADAITEMSTEMPRESAID") ;
      this.AV14pEntradaItemSTId=gx.fn.getIntegerValue("vPENTRADAITEMSTID",'.') ;
      this.AV15pEntradaItemSTSeq=gx.fn.getIntegerValue("vPENTRADAITEMSTSEQ",'.') ;
   };
   this.e132av2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142av1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0mb0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10943,53,"ENTRADAITEMSTEMPRESAID","Empresa","","EntradaItemSTEmpresaId","char",0,"px",10,10,"left",null,[],10943,"EntradaItemSTEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10944,54,"ENTRADAITEMSTID","Id","","EntradaItemSTId","int",0,"px",10,10,"right",null,[],10944,"EntradaItemSTId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10945,55,"ENTRADAITEMSTSEQ","Sequência","","EntradaItemSTSeq","int",0,"px",6,6,"right",null,[],10945,"EntradaItemSTSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10950,56,"ENTRADAITEMSTDATAENT","STData Ent","","EntradaItemSTDataEnt","date",0,"px",10,10,"right",null,[],10950,"EntradaItemSTDataEnt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10963,57,"ENTRADAITEMSTSNIMPLANTA","Implantação?","","EntradaItemSTSnImplanta","char",0,"px",1,1,"left",null,[],10963,"EntradaItemSTSnImplanta",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10956,58,"ENTRADAITEMSTPRODEMP","STProd Emp","","EntradaItemSTProdEmp","char",0,"px",10,10,"left",null,[],10956,"EntradaItemSTProdEmp",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10957,59,"ENTRADAITEMSTPRODID","STProd Id","","EntradaItemSTProdId","int",0,"px",10,10,"right",null,[],10957,"EntradaItemSTProdId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10962,60,"ENTRADAITEMSTTIPO","Tipo","","EntradaItemSTTipo","char",0,"px",1,1,"left",null,[],10962,"EntradaItemSTTipo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKENTRADAITEMSTEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAITEMSTEMPRESAID",gxz:"ZV6cEntradaItemSTEmpresaId",gxold:"OV6cEntradaItemSTEmpresaId",gxvar:"AV6cEntradaItemSTEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEntradaItemSTEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEntradaItemSTEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAITEMSTEMPRESAID",gx.O.AV6cEntradaItemSTEmpresaId,0)},c2v:function(){gx.O.AV6cEntradaItemSTEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAITEMSTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKENTRADAITEMSTID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAITEMSTID",gxz:"ZV7cEntradaItemSTId",gxold:"OV7cEntradaItemSTId",gxvar:"AV7cEntradaItemSTId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEntradaItemSTId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cEntradaItemSTId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAITEMSTID",gx.O.AV7cEntradaItemSTId,0)},c2v:function(){gx.O.AV7cEntradaItemSTId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAITEMSTID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKENTRADAITEMSTSEQ", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAITEMSTSEQ",gxz:"ZV8cEntradaItemSTSeq",gxold:"OV8cEntradaItemSTSeq",gxvar:"AV8cEntradaItemSTSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEntradaItemSTSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cEntradaItemSTSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAITEMSTSEQ",gx.O.AV8cEntradaItemSTSeq,0)},c2v:function(){gx.O.AV8cEntradaItemSTSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAITEMSTSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKENTRADAITEMSTDATAENT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAITEMSTDATAENT",gxz:"ZV16cEntradaItemSTDataEnt",gxold:"OV16cEntradaItemSTDataEnt",gxvar:"AV16cEntradaItemSTDataEnt",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16cEntradaItemSTDataEnt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16cEntradaItemSTDataEnt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAITEMSTDATAENT",gx.O.AV16cEntradaItemSTDataEnt,0)},c2v:function(){gx.O.AV16cEntradaItemSTDataEnt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCENTRADAITEMSTDATAENT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKENTRADAITEMSTSNIMPLANTA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAITEMSTSNIMPLANTA",gxz:"ZV9cEntradaItemSTSnImplanta",gxold:"OV9cEntradaItemSTSnImplanta",gxvar:"AV9cEntradaItemSTSnImplanta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cEntradaItemSTSnImplanta=Value},v2z:function(Value){gx.O.ZV9cEntradaItemSTSnImplanta=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAITEMSTSNIMPLANTA",gx.O.AV9cEntradaItemSTSnImplanta,0)},c2v:function(){gx.O.AV9cEntradaItemSTSnImplanta=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAITEMSTSNIMPLANTA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKENTRADAITEMSTPRODEMP", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAITEMSTPRODEMP",gxz:"ZV17cEntradaItemSTProdEmp",gxold:"OV17cEntradaItemSTProdEmp",gxvar:"AV17cEntradaItemSTProdEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17cEntradaItemSTProdEmp=Value},v2z:function(Value){gx.O.ZV17cEntradaItemSTProdEmp=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAITEMSTPRODEMP",gx.O.AV17cEntradaItemSTProdEmp,0)},c2v:function(){gx.O.AV17cEntradaItemSTProdEmp=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAITEMSTPRODEMP")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKENTRADAITEMSTPRODID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAITEMSTPRODID",gxz:"ZV18cEntradaItemSTProdId",gxold:"OV18cEntradaItemSTProdId",gxvar:"AV18cEntradaItemSTProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18cEntradaItemSTProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18cEntradaItemSTProdId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAITEMSTPRODID",gx.O.AV18cEntradaItemSTProdId,0)},c2v:function(){gx.O.AV18cEntradaItemSTProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAITEMSTPRODID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV21Linkselection_GXI)},c2v:function(){gx.O.AV21Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV21Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSTEMPRESAID",gxz:"Z10943EntradaItemSTEmpresaId",gxold:"O10943EntradaItemSTEmpresaId",gxvar:"A10943EntradaItemSTEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10943EntradaItemSTEmpresaId=Value},v2z:function(Value){gx.O.Z10943EntradaItemSTEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAITEMSTEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A10943EntradaItemSTEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10943EntradaItemSTEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAITEMSTEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSTID",gxz:"Z10944EntradaItemSTId",gxold:"O10944EntradaItemSTId",gxvar:"A10944EntradaItemSTId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10944EntradaItemSTId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10944EntradaItemSTId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAITEMSTID",row || gx.fn.currentGridRowImpl(51),gx.O.A10944EntradaItemSTId,0)},c2v:function(){gx.O.A10944EntradaItemSTId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAITEMSTID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSTSEQ",gxz:"Z10945EntradaItemSTSeq",gxold:"O10945EntradaItemSTSeq",gxvar:"A10945EntradaItemSTSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10945EntradaItemSTSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10945EntradaItemSTSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAITEMSTSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A10945EntradaItemSTSeq,0)},c2v:function(){gx.O.A10945EntradaItemSTSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAITEMSTSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSTDATAENT",gxz:"Z10950EntradaItemSTDataEnt",gxold:"O10950EntradaItemSTDataEnt",gxvar:"A10950EntradaItemSTDataEnt",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10950EntradaItemSTDataEnt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10950EntradaItemSTDataEnt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAITEMSTDATAENT",row || gx.fn.currentGridRowImpl(51),gx.O.A10950EntradaItemSTDataEnt,0)},c2v:function(){gx.O.A10950EntradaItemSTDataEnt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTRADAITEMSTDATAENT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSTSNIMPLANTA",gxz:"Z10963EntradaItemSTSnImplanta",gxold:"O10963EntradaItemSTSnImplanta",gxvar:"A10963EntradaItemSTSnImplanta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10963EntradaItemSTSnImplanta=Value},v2z:function(Value){gx.O.Z10963EntradaItemSTSnImplanta=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAITEMSTSNIMPLANTA",row || gx.fn.currentGridRowImpl(51),gx.O.A10963EntradaItemSTSnImplanta,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10963EntradaItemSTSnImplanta=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAITEMSTSNIMPLANTA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSTPRODEMP",gxz:"Z10956EntradaItemSTProdEmp",gxold:"O10956EntradaItemSTProdEmp",gxvar:"A10956EntradaItemSTProdEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10956EntradaItemSTProdEmp=Value},v2z:function(Value){gx.O.Z10956EntradaItemSTProdEmp=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAITEMSTPRODEMP",row || gx.fn.currentGridRowImpl(51),gx.O.A10956EntradaItemSTProdEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10956EntradaItemSTProdEmp=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAITEMSTPRODEMP",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSTPRODID",gxz:"Z10957EntradaItemSTProdId",gxold:"O10957EntradaItemSTProdId",gxvar:"A10957EntradaItemSTProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10957EntradaItemSTProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10957EntradaItemSTProdId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAITEMSTPRODID",row || gx.fn.currentGridRowImpl(51),gx.O.A10957EntradaItemSTProdId,0)},c2v:function(){gx.O.A10957EntradaItemSTProdId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAITEMSTPRODID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSTTIPO",gxz:"Z10962EntradaItemSTTipo",gxold:"O10962EntradaItemSTTipo",gxvar:"A10962EntradaItemSTTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10962EntradaItemSTTipo=Value},v2z:function(Value){gx.O.Z10962EntradaItemSTTipo=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAITEMSTTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A10962EntradaItemSTTipo,0)},c2v:function(){gx.O.A10962EntradaItemSTTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAITEMSTTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cEntradaItemSTEmpresaId = "" ;
   this.ZV6cEntradaItemSTEmpresaId = "" ;
   this.OV6cEntradaItemSTEmpresaId = "" ;
   this.AV7cEntradaItemSTId = 0 ;
   this.ZV7cEntradaItemSTId = 0 ;
   this.OV7cEntradaItemSTId = 0 ;
   this.AV8cEntradaItemSTSeq = 0 ;
   this.ZV8cEntradaItemSTSeq = 0 ;
   this.OV8cEntradaItemSTSeq = 0 ;
   this.AV16cEntradaItemSTDataEnt = gx.date.nullDate() ;
   this.ZV16cEntradaItemSTDataEnt = gx.date.nullDate() ;
   this.OV16cEntradaItemSTDataEnt = gx.date.nullDate() ;
   this.AV9cEntradaItemSTSnImplanta = "" ;
   this.ZV9cEntradaItemSTSnImplanta = "" ;
   this.OV9cEntradaItemSTSnImplanta = "" ;
   this.AV17cEntradaItemSTProdEmp = "" ;
   this.ZV17cEntradaItemSTProdEmp = "" ;
   this.OV17cEntradaItemSTProdEmp = "" ;
   this.AV18cEntradaItemSTProdId = 0 ;
   this.ZV18cEntradaItemSTProdId = 0 ;
   this.OV18cEntradaItemSTProdId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10943EntradaItemSTEmpresaId = "" ;
   this.O10943EntradaItemSTEmpresaId = "" ;
   this.Z10944EntradaItemSTId = 0 ;
   this.O10944EntradaItemSTId = 0 ;
   this.Z10945EntradaItemSTSeq = 0 ;
   this.O10945EntradaItemSTSeq = 0 ;
   this.Z10950EntradaItemSTDataEnt = gx.date.nullDate() ;
   this.O10950EntradaItemSTDataEnt = gx.date.nullDate() ;
   this.Z10963EntradaItemSTSnImplanta = "" ;
   this.O10963EntradaItemSTSnImplanta = "" ;
   this.Z10956EntradaItemSTProdEmp = "" ;
   this.O10956EntradaItemSTProdEmp = "" ;
   this.Z10957EntradaItemSTProdId = 0 ;
   this.O10957EntradaItemSTProdId = 0 ;
   this.Z10962EntradaItemSTTipo = "" ;
   this.O10962EntradaItemSTTipo = "" ;
   this.AV6cEntradaItemSTEmpresaId = "" ;
   this.AV7cEntradaItemSTId = 0 ;
   this.AV8cEntradaItemSTSeq = 0 ;
   this.AV16cEntradaItemSTDataEnt = gx.date.nullDate() ;
   this.AV9cEntradaItemSTSnImplanta = "" ;
   this.AV17cEntradaItemSTProdEmp = "" ;
   this.AV18cEntradaItemSTProdId = 0 ;
   this.AV13pEntradaItemSTEmpresaId = "" ;
   this.AV14pEntradaItemSTId = 0 ;
   this.AV15pEntradaItemSTSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A10943EntradaItemSTEmpresaId = "" ;
   this.A10944EntradaItemSTId = 0 ;
   this.A10945EntradaItemSTSeq = 0 ;
   this.A10950EntradaItemSTDataEnt = gx.date.nullDate() ;
   this.A10963EntradaItemSTSnImplanta = "" ;
   this.A10956EntradaItemSTProdEmp = "" ;
   this.A10957EntradaItemSTProdId = 0 ;
   this.A10962EntradaItemSTTipo = "" ;
   this.Events = {"e132av2_client": ["ENTER", true] ,"e142av1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaItemSTEmpresaId',fld:'vCENTRADAITEMSTEMPRESAID'},{av:'AV7cEntradaItemSTId',fld:'vCENTRADAITEMSTID'},{av:'AV8cEntradaItemSTSeq',fld:'vCENTRADAITEMSTSEQ'},{av:'AV16cEntradaItemSTDataEnt',fld:'vCENTRADAITEMSTDATAENT'},{av:'AV9cEntradaItemSTSnImplanta',fld:'vCENTRADAITEMSTSNIMPLANTA'},{av:'AV17cEntradaItemSTProdEmp',fld:'vCENTRADAITEMSTPRODEMP'},{av:'AV18cEntradaItemSTProdId',fld:'vCENTRADAITEMSTPRODID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10943EntradaItemSTEmpresaId',fld:'ENTRADAITEMSTEMPRESAID'},{av:'A10944EntradaItemSTId',fld:'ENTRADAITEMSTID'},{av:'A10945EntradaItemSTSeq',fld:'ENTRADAITEMSTSEQ'}],[{av:'AV13pEntradaItemSTEmpresaId',fld:'vPENTRADAITEMSTEMPRESAID'},{av:'AV14pEntradaItemSTId',fld:'vPENTRADAITEMSTID'},{av:'AV15pEntradaItemSTSeq',fld:'vPENTRADAITEMSTSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaItemSTEmpresaId',fld:'vCENTRADAITEMSTEMPRESAID'},{av:'AV7cEntradaItemSTId',fld:'vCENTRADAITEMSTID'},{av:'AV8cEntradaItemSTSeq',fld:'vCENTRADAITEMSTSEQ'},{av:'AV16cEntradaItemSTDataEnt',fld:'vCENTRADAITEMSTDATAENT'},{av:'AV9cEntradaItemSTSnImplanta',fld:'vCENTRADAITEMSTSNIMPLANTA'},{av:'AV17cEntradaItemSTProdEmp',fld:'vCENTRADAITEMSTPRODEMP'},{av:'AV18cEntradaItemSTProdId',fld:'vCENTRADAITEMSTPRODID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaItemSTEmpresaId',fld:'vCENTRADAITEMSTEMPRESAID'},{av:'AV7cEntradaItemSTId',fld:'vCENTRADAITEMSTID'},{av:'AV8cEntradaItemSTSeq',fld:'vCENTRADAITEMSTSEQ'},{av:'AV16cEntradaItemSTDataEnt',fld:'vCENTRADAITEMSTDATAENT'},{av:'AV9cEntradaItemSTSnImplanta',fld:'vCENTRADAITEMSTSNIMPLANTA'},{av:'AV17cEntradaItemSTProdEmp',fld:'vCENTRADAITEMSTPRODEMP'},{av:'AV18cEntradaItemSTProdId',fld:'vCENTRADAITEMSTPRODID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaItemSTEmpresaId',fld:'vCENTRADAITEMSTEMPRESAID'},{av:'AV7cEntradaItemSTId',fld:'vCENTRADAITEMSTID'},{av:'AV8cEntradaItemSTSeq',fld:'vCENTRADAITEMSTSEQ'},{av:'AV16cEntradaItemSTDataEnt',fld:'vCENTRADAITEMSTDATAENT'},{av:'AV9cEntradaItemSTSnImplanta',fld:'vCENTRADAITEMSTSNIMPLANTA'},{av:'AV17cEntradaItemSTProdEmp',fld:'vCENTRADAITEMSTPRODEMP'},{av:'AV18cEntradaItemSTProdId',fld:'vCENTRADAITEMSTPRODID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaItemSTEmpresaId',fld:'vCENTRADAITEMSTEMPRESAID'},{av:'AV7cEntradaItemSTId',fld:'vCENTRADAITEMSTID'},{av:'AV8cEntradaItemSTSeq',fld:'vCENTRADAITEMSTSEQ'},{av:'AV16cEntradaItemSTDataEnt',fld:'vCENTRADAITEMSTDATAENT'},{av:'AV9cEntradaItemSTSnImplanta',fld:'vCENTRADAITEMSTSNIMPLANTA'},{av:'AV17cEntradaItemSTProdEmp',fld:'vCENTRADAITEMSTPRODEMP'},{av:'AV18cEntradaItemSTProdId',fld:'vCENTRADAITEMSTPRODID'}],[]];
   this.setVCMap("AV13pEntradaItemSTEmpresaId", "vPENTRADAITEMSTEMPRESAID", 0, "char");
   this.setVCMap("AV14pEntradaItemSTId", "vPENTRADAITEMSTID", 0, "int");
   this.setVCMap("AV15pEntradaItemSTSeq", "vPENTRADAITEMSTSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0mb0());
