/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:43:7.97
*/
gx.evt.autoSkip = false;
gx.define('gx0je0', false, function () {
   this.ServerClass =  "gx0je0" ;
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
      this.AV13pComissaoGerenteEmpresaId=gx.fn.getControlValue("vPCOMISSAOGERENTEEMPRESAID") ;
      this.AV14pComissaoGerenteSeq=gx.fn.getIntegerValue("vPCOMISSAOGERENTESEQ",'.') ;
   };
   this.e131wq2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141wq1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,62];
   this.GXLastCtrlId =62;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0je0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9293,53,"COMISSAOGERENTEEMPRESAID","Empresa Id","","ComissaoGerenteEmpresaId","char",0,"px",10,10,"left",null,[],9293,"ComissaoGerenteEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9294,54,"COMISSAOGERENTESEQ","Sequencia","","ComissaoGerenteSeq","int",0,"px",6,6,"right",null,[],9294,"ComissaoGerenteSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9288,55,"COMISSAOGERENTEVALORINICIAL","Valor Inicial","Selecionar","ComissaoGerenteValorInicial","decimal",0,"px",22,22,"right",null,[],9288,"ComissaoGerenteValorInicial",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9289,56,"COMISSAOGERENTEVALORFINAL","Valor Final","","ComissaoGerenteValorFinal","decimal",0,"px",22,22,"right",null,[],9289,"ComissaoGerenteValorFinal",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9290,57,"COMISSAOGERENTEPERCENTUAL","Percentual Comissão","","ComissaoGerentePercentual","decimal",0,"px",22,22,"right",null,[],9290,"ComissaoGerentePercentual",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9291,58,"COMISSAOGERENTEUSUARIOALT","Usuario Alteracao","","ComissaoGerenteUsuarioAlt","char",0,"px",12,12,"left",null,[],9291,"ComissaoGerenteUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9292,59,"COMISSAOGERENTEDATAHORAALT","Data Hora Alteracao","","ComissaoGerenteDataHoraAlt","dtime",0,"px",16,16,"right",null,[],9292,"ComissaoGerenteDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCOMISSAOGERENTEEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOMISSAOGERENTEEMPRESAID",gxz:"ZV6cComissaoGerenteEmpresaId",gxold:"OV6cComissaoGerenteEmpresaId",gxvar:"AV6cComissaoGerenteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cComissaoGerenteEmpresaId=Value},v2z:function(Value){gx.O.ZV6cComissaoGerenteEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCOMISSAOGERENTEEMPRESAID",gx.O.AV6cComissaoGerenteEmpresaId,0)},c2v:function(){gx.O.AV6cComissaoGerenteEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCOMISSAOGERENTEEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCOMISSAOGERENTESEQ", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOMISSAOGERENTESEQ",gxz:"ZV7cComissaoGerenteSeq",gxold:"OV7cComissaoGerenteSeq",gxvar:"AV7cComissaoGerenteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cComissaoGerenteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cComissaoGerenteSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCOMISSAOGERENTESEQ",gx.O.AV7cComissaoGerenteSeq,0)},c2v:function(){gx.O.AV7cComissaoGerenteSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCOMISSAOGERENTESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCOMISSAOGERENTEVALORINICIAL", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOMISSAOGERENTEVALORINICIAL",gxz:"ZV8cComissaoGerenteValorInicial",gxold:"OV8cComissaoGerenteValorInicial",gxvar:"AV8cComissaoGerenteValorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8cComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCCOMISSAOGERENTEVALORINICIAL",gx.O.AV8cComissaoGerenteValorInicial,2,',')},c2v:function(){gx.O.AV8cComissaoGerenteValorInicial=this.val()},val:function(){return gx.fn.getDecimalValue("vCCOMISSAOGERENTEVALORINICIAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCOMISSAOGERENTEVALORFINAL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOMISSAOGERENTEVALORFINAL",gxz:"ZV9cComissaoGerenteValorFinal",gxold:"OV9cComissaoGerenteValorFinal",gxvar:"AV9cComissaoGerenteValorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9cComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCCOMISSAOGERENTEVALORFINAL",gx.O.AV9cComissaoGerenteValorFinal,2,',')},c2v:function(){gx.O.AV9cComissaoGerenteValorFinal=this.val()},val:function(){return gx.fn.getDecimalValue("vCCOMISSAOGERENTEVALORFINAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCOMISSAOGERENTEPERCENTUAL", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOMISSAOGERENTEPERCENTUAL",gxz:"ZV10cComissaoGerentePercentual",gxold:"OV10cComissaoGerentePercentual",gxvar:"AV10cComissaoGerentePercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cComissaoGerentePercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV10cComissaoGerentePercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCCOMISSAOGERENTEPERCENTUAL",gx.O.AV10cComissaoGerentePercentual,2,',')},c2v:function(){gx.O.AV10cComissaoGerentePercentual=this.val()},val:function(){return gx.fn.getDecimalValue("vCCOMISSAOGERENTEPERCENTUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCOMISSAOGERENTEUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOMISSAOGERENTEUSUARIOALT",gxz:"ZV11cComissaoGerenteUsuarioAlt",gxold:"OV11cComissaoGerenteUsuarioAlt",gxvar:"AV11cComissaoGerenteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cComissaoGerenteUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cComissaoGerenteUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCCOMISSAOGERENTEUSUARIOALT",gx.O.AV11cComissaoGerenteUsuarioAlt,0)},c2v:function(){gx.O.AV11cComissaoGerenteUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCCOMISSAOGERENTEUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCOMISSAOGERENTEDATAHORAALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCOMISSAOGERENTEDATAHORAALT",gxz:"ZV12cComissaoGerenteDataHoraAlt",gxold:"OV12cComissaoGerenteDataHoraAlt",gxvar:"AV12cComissaoGerenteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cComissaoGerenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV12cComissaoGerenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCOMISSAOGERENTEDATAHORAALT",gx.O.AV12cComissaoGerenteDataHoraAlt,0)},c2v:function(){gx.O.AV12cComissaoGerenteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCCOMISSAOGERENTEDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEEMPRESAID",gxz:"Z9293ComissaoGerenteEmpresaId",gxold:"O9293ComissaoGerenteEmpresaId",gxvar:"A9293ComissaoGerenteEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9293ComissaoGerenteEmpresaId=Value},v2z:function(Value){gx.O.Z9293ComissaoGerenteEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("COMISSAOGERENTEEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A9293ComissaoGerenteEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9293ComissaoGerenteEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("COMISSAOGERENTEEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTESEQ",gxz:"Z9294ComissaoGerenteSeq",gxold:"O9294ComissaoGerenteSeq",gxvar:"A9294ComissaoGerenteSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9294ComissaoGerenteSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9294ComissaoGerenteSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("COMISSAOGERENTESEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A9294ComissaoGerenteSeq,0)},c2v:function(){gx.O.A9294ComissaoGerenteSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("COMISSAOGERENTESEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEVALORINICIAL",gxz:"Z9288ComissaoGerenteValorInicial",gxold:"O9288ComissaoGerenteValorInicial",gxvar:"A9288ComissaoGerenteValorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9288ComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9288ComissaoGerenteValorInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOGERENTEVALORINICIAL",row || gx.fn.currentGridRowImpl(51),gx.O.A9288ComissaoGerenteValorInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9288ComissaoGerenteValorInicial=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOGERENTEVALORINICIAL",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEVALORFINAL",gxz:"Z9289ComissaoGerenteValorFinal",gxold:"O9289ComissaoGerenteValorFinal",gxvar:"A9289ComissaoGerenteValorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9289ComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9289ComissaoGerenteValorFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOGERENTEVALORFINAL",row || gx.fn.currentGridRowImpl(51),gx.O.A9289ComissaoGerenteValorFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9289ComissaoGerenteValorFinal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOGERENTEVALORFINAL",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEPERCENTUAL",gxz:"Z9290ComissaoGerentePercentual",gxold:"O9290ComissaoGerentePercentual",gxvar:"A9290ComissaoGerentePercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9290ComissaoGerentePercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9290ComissaoGerentePercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOGERENTEPERCENTUAL",row || gx.fn.currentGridRowImpl(51),gx.O.A9290ComissaoGerentePercentual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9290ComissaoGerentePercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOGERENTEPERCENTUAL",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEUSUARIOALT",gxz:"Z9291ComissaoGerenteUsuarioAlt",gxold:"O9291ComissaoGerenteUsuarioAlt",gxvar:"A9291ComissaoGerenteUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9291ComissaoGerenteUsuarioAlt=Value},v2z:function(Value){gx.O.Z9291ComissaoGerenteUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("COMISSAOGERENTEUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A9291ComissaoGerenteUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9291ComissaoGerenteUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("COMISSAOGERENTEUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOGERENTEDATAHORAALT",gxz:"Z9292ComissaoGerenteDataHoraAlt",gxold:"O9292ComissaoGerenteDataHoraAlt",gxvar:"A9292ComissaoGerenteDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9292ComissaoGerenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9292ComissaoGerenteDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("COMISSAOGERENTEDATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A9292ComissaoGerenteDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9292ComissaoGerenteDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("COMISSAOGERENTEDATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TABLE4",grid:0};
   this.AV6cComissaoGerenteEmpresaId = "" ;
   this.ZV6cComissaoGerenteEmpresaId = "" ;
   this.OV6cComissaoGerenteEmpresaId = "" ;
   this.AV7cComissaoGerenteSeq = 0 ;
   this.ZV7cComissaoGerenteSeq = 0 ;
   this.OV7cComissaoGerenteSeq = 0 ;
   this.AV8cComissaoGerenteValorInicial = 0 ;
   this.ZV8cComissaoGerenteValorInicial = 0 ;
   this.OV8cComissaoGerenteValorInicial = 0 ;
   this.AV9cComissaoGerenteValorFinal = 0 ;
   this.ZV9cComissaoGerenteValorFinal = 0 ;
   this.OV9cComissaoGerenteValorFinal = 0 ;
   this.AV10cComissaoGerentePercentual = 0 ;
   this.ZV10cComissaoGerentePercentual = 0 ;
   this.OV10cComissaoGerentePercentual = 0 ;
   this.AV11cComissaoGerenteUsuarioAlt = "" ;
   this.ZV11cComissaoGerenteUsuarioAlt = "" ;
   this.OV11cComissaoGerenteUsuarioAlt = "" ;
   this.AV12cComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.ZV12cComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.OV12cComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9293ComissaoGerenteEmpresaId = "" ;
   this.O9293ComissaoGerenteEmpresaId = "" ;
   this.Z9294ComissaoGerenteSeq = 0 ;
   this.O9294ComissaoGerenteSeq = 0 ;
   this.Z9288ComissaoGerenteValorInicial = 0 ;
   this.O9288ComissaoGerenteValorInicial = 0 ;
   this.Z9289ComissaoGerenteValorFinal = 0 ;
   this.O9289ComissaoGerenteValorFinal = 0 ;
   this.Z9290ComissaoGerentePercentual = 0 ;
   this.O9290ComissaoGerentePercentual = 0 ;
   this.Z9291ComissaoGerenteUsuarioAlt = "" ;
   this.O9291ComissaoGerenteUsuarioAlt = "" ;
   this.Z9292ComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.O9292ComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.AV6cComissaoGerenteEmpresaId = "" ;
   this.AV7cComissaoGerenteSeq = 0 ;
   this.AV8cComissaoGerenteValorInicial = 0 ;
   this.AV9cComissaoGerenteValorFinal = 0 ;
   this.AV10cComissaoGerentePercentual = 0 ;
   this.AV11cComissaoGerenteUsuarioAlt = "" ;
   this.AV12cComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.AV13pComissaoGerenteEmpresaId = "" ;
   this.AV14pComissaoGerenteSeq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A9293ComissaoGerenteEmpresaId = "" ;
   this.A9294ComissaoGerenteSeq = 0 ;
   this.A9288ComissaoGerenteValorInicial = 0 ;
   this.A9289ComissaoGerenteValorFinal = 0 ;
   this.A9290ComissaoGerentePercentual = 0 ;
   this.A9291ComissaoGerenteUsuarioAlt = "" ;
   this.A9292ComissaoGerenteDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131wq2_client": ["ENTER", true] ,"e141wq1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cComissaoGerenteEmpresaId',fld:'vCCOMISSAOGERENTEEMPRESAID'},{av:'AV7cComissaoGerenteSeq',fld:'vCCOMISSAOGERENTESEQ'},{av:'AV8cComissaoGerenteValorInicial',fld:'vCCOMISSAOGERENTEVALORINICIAL'},{av:'AV9cComissaoGerenteValorFinal',fld:'vCCOMISSAOGERENTEVALORFINAL'},{av:'AV10cComissaoGerentePercentual',fld:'vCCOMISSAOGERENTEPERCENTUAL'},{av:'AV11cComissaoGerenteUsuarioAlt',fld:'vCCOMISSAOGERENTEUSUARIOALT'},{av:'AV12cComissaoGerenteDataHoraAlt',fld:'vCCOMISSAOGERENTEDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9293ComissaoGerenteEmpresaId',fld:'COMISSAOGERENTEEMPRESAID'},{av:'A9294ComissaoGerenteSeq',fld:'COMISSAOGERENTESEQ'}],[{av:'AV13pComissaoGerenteEmpresaId',fld:'vPCOMISSAOGERENTEEMPRESAID'},{av:'AV14pComissaoGerenteSeq',fld:'vPCOMISSAOGERENTESEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cComissaoGerenteEmpresaId',fld:'vCCOMISSAOGERENTEEMPRESAID'},{av:'AV7cComissaoGerenteSeq',fld:'vCCOMISSAOGERENTESEQ'},{av:'AV8cComissaoGerenteValorInicial',fld:'vCCOMISSAOGERENTEVALORINICIAL'},{av:'AV9cComissaoGerenteValorFinal',fld:'vCCOMISSAOGERENTEVALORFINAL'},{av:'AV10cComissaoGerentePercentual',fld:'vCCOMISSAOGERENTEPERCENTUAL'},{av:'AV11cComissaoGerenteUsuarioAlt',fld:'vCCOMISSAOGERENTEUSUARIOALT'},{av:'AV12cComissaoGerenteDataHoraAlt',fld:'vCCOMISSAOGERENTEDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cComissaoGerenteEmpresaId',fld:'vCCOMISSAOGERENTEEMPRESAID'},{av:'AV7cComissaoGerenteSeq',fld:'vCCOMISSAOGERENTESEQ'},{av:'AV8cComissaoGerenteValorInicial',fld:'vCCOMISSAOGERENTEVALORINICIAL'},{av:'AV9cComissaoGerenteValorFinal',fld:'vCCOMISSAOGERENTEVALORFINAL'},{av:'AV10cComissaoGerentePercentual',fld:'vCCOMISSAOGERENTEPERCENTUAL'},{av:'AV11cComissaoGerenteUsuarioAlt',fld:'vCCOMISSAOGERENTEUSUARIOALT'},{av:'AV12cComissaoGerenteDataHoraAlt',fld:'vCCOMISSAOGERENTEDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cComissaoGerenteEmpresaId',fld:'vCCOMISSAOGERENTEEMPRESAID'},{av:'AV7cComissaoGerenteSeq',fld:'vCCOMISSAOGERENTESEQ'},{av:'AV8cComissaoGerenteValorInicial',fld:'vCCOMISSAOGERENTEVALORINICIAL'},{av:'AV9cComissaoGerenteValorFinal',fld:'vCCOMISSAOGERENTEVALORFINAL'},{av:'AV10cComissaoGerentePercentual',fld:'vCCOMISSAOGERENTEPERCENTUAL'},{av:'AV11cComissaoGerenteUsuarioAlt',fld:'vCCOMISSAOGERENTEUSUARIOALT'},{av:'AV12cComissaoGerenteDataHoraAlt',fld:'vCCOMISSAOGERENTEDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cComissaoGerenteEmpresaId',fld:'vCCOMISSAOGERENTEEMPRESAID'},{av:'AV7cComissaoGerenteSeq',fld:'vCCOMISSAOGERENTESEQ'},{av:'AV8cComissaoGerenteValorInicial',fld:'vCCOMISSAOGERENTEVALORINICIAL'},{av:'AV9cComissaoGerenteValorFinal',fld:'vCCOMISSAOGERENTEVALORFINAL'},{av:'AV10cComissaoGerentePercentual',fld:'vCCOMISSAOGERENTEPERCENTUAL'},{av:'AV11cComissaoGerenteUsuarioAlt',fld:'vCCOMISSAOGERENTEUSUARIOALT'},{av:'AV12cComissaoGerenteDataHoraAlt',fld:'vCCOMISSAOGERENTEDATAHORAALT'}],[]];
   this.setVCMap("AV13pComissaoGerenteEmpresaId", "vPCOMISSAOGERENTEEMPRESAID", 0, "char");
   this.setVCMap("AV14pComissaoGerenteSeq", "vPCOMISSAOGERENTESEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0je0());