/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:40:37.68
*/
gx.evt.autoSkip = false;
gx.define('gx0g30', false, function () {
   this.ServerClass =  "gx0g30" ;
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
      this.AV13pNFE010LOGSTATUSempcodigo=gx.fn.getIntegerValue("vPNFE010LOGSTATUSEMPCODIGO",'.') ;
      this.AV14pNFE010LOGSTATUSntfnumero=gx.fn.getIntegerValue("vPNFE010LOGSTATUSNTFNUMERO",'.') ;
      this.AV15pNFE010LOGSTATUSntfserie=gx.fn.getControlValue("vPNFE010LOGSTATUSNTFSERIE") ;
      this.AV16pNFE010LOGSTATUSlgncodigo=gx.fn.getIntegerValue("vPNFE010LOGSTATUSLGNCODIGO",'.') ;
      this.AV17pNFE010LOGSTATUSstsretcod=gx.fn.getIntegerValue("vPNFE010LOGSTATUSSTSRETCOD",'.') ;
      this.AV18pNFE010LOGSTATUSlgnstsdata=gx.fn.getDateTimeValue("vPNFE010LOGSTATUSLGNSTSDATA") ;
   };
   this.e131ub2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ub1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0g30",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7653,53,"NFE010LOGSTATUSEMPCODIGO","Código da Empresa","","NFE010LOGSTATUSempcodigo","int",0,"px",3,3,"right",null,[],7653,"NFE010LOGSTATUSempcodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7654,54,"NFE010LOGSTATUSNTFNUMERO","Número do Documento Fiscal","","NFE010LOGSTATUSntfnumero","int",0,"px",9,9,"right",null,[],7654,"NFE010LOGSTATUSntfnumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7655,55,"NFE010LOGSTATUSNTFSERIE","Série do Documento Fiscal","","NFE010LOGSTATUSntfserie","char",0,"px",3,3,"left",null,[],7655,"NFE010LOGSTATUSntfserie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7656,56,"NFE010LOGSTATUSLGNCODIGO","Código","","NFE010LOGSTATUSlgncodigo","int",0,"px",4,4,"right",null,[],7656,"NFE010LOGSTATUSlgncodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7657,57,"NFE010LOGSTATUSSTSRETCOD","Retorno do SEFAZ","","NFE010LOGSTATUSstsretcod","int",0,"px",4,4,"right",null,[],7657,"NFE010LOGSTATUSstsretcod",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7658,58,"NFE010LOGSTATUSLGNSTSDATA","Data/Hora do Retorno","","NFE010LOGSTATUSlgnstsdata","dtime",0,"px",16,16,"right",null,[],7658,"NFE010LOGSTATUSlgnstsdata",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKNFE010LOGSTATUSEMPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LOGSTATUSEMPCODIGO",gxz:"ZV6cNFE010LOGSTATUSempcodigo",gxold:"OV6cNFE010LOGSTATUSempcodigo",gxvar:"AV6cNFE010LOGSTATUSempcodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cNFE010LOGSTATUSempcodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cNFE010LOGSTATUSempcodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LOGSTATUSEMPCODIGO",gx.O.AV6cNFE010LOGSTATUSempcodigo,0)},c2v:function(){gx.O.AV6cNFE010LOGSTATUSempcodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFE010LOGSTATUSEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKNFE010LOGSTATUSNTFNUMERO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LOGSTATUSNTFNUMERO",gxz:"ZV7cNFE010LOGSTATUSntfnumero",gxold:"OV7cNFE010LOGSTATUSntfnumero",gxvar:"AV7cNFE010LOGSTATUSntfnumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cNFE010LOGSTATUSntfnumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cNFE010LOGSTATUSntfnumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LOGSTATUSNTFNUMERO",gx.O.AV7cNFE010LOGSTATUSntfnumero,0)},c2v:function(){gx.O.AV7cNFE010LOGSTATUSntfnumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFE010LOGSTATUSNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKNFE010LOGSTATUSNTFSERIE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LOGSTATUSNTFSERIE",gxz:"ZV8cNFE010LOGSTATUSntfserie",gxold:"OV8cNFE010LOGSTATUSntfserie",gxvar:"AV8cNFE010LOGSTATUSntfserie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cNFE010LOGSTATUSntfserie=Value},v2z:function(Value){gx.O.ZV8cNFE010LOGSTATUSntfserie=Value},v2c:function(){gx.fn.setControlValue("vCNFE010LOGSTATUSNTFSERIE",gx.O.AV8cNFE010LOGSTATUSntfserie,0)},c2v:function(){gx.O.AV8cNFE010LOGSTATUSntfserie=this.val()},val:function(){return gx.fn.getControlValue("vCNFE010LOGSTATUSNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKNFE010LOGSTATUSLGNCODIGO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LOGSTATUSLGNCODIGO",gxz:"ZV9cNFE010LOGSTATUSlgncodigo",gxold:"OV9cNFE010LOGSTATUSlgncodigo",gxvar:"AV9cNFE010LOGSTATUSlgncodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cNFE010LOGSTATUSlgncodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cNFE010LOGSTATUSlgncodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LOGSTATUSLGNCODIGO",gx.O.AV9cNFE010LOGSTATUSlgncodigo,0)},c2v:function(){gx.O.AV9cNFE010LOGSTATUSlgncodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFE010LOGSTATUSLGNCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKNFE010LOGSTATUSSTSRETCOD", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LOGSTATUSSTSRETCOD",gxz:"ZV10cNFE010LOGSTATUSstsretcod",gxold:"OV10cNFE010LOGSTATUSstsretcod",gxvar:"AV10cNFE010LOGSTATUSstsretcod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cNFE010LOGSTATUSstsretcod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cNFE010LOGSTATUSstsretcod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LOGSTATUSSTSRETCOD",gx.O.AV10cNFE010LOGSTATUSstsretcod,0)},c2v:function(){gx.O.AV10cNFE010LOGSTATUSstsretcod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFE010LOGSTATUSSTSRETCOD",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKNFE010LOGSTATUSLGNSTSDATA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LOGSTATUSLGNSTSDATA",gxz:"ZV11cNFE010LOGSTATUSlgnstsdata",gxold:"OV11cNFE010LOGSTATUSlgnstsdata",gxvar:"AV11cNFE010LOGSTATUSlgnstsdata",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cNFE010LOGSTATUSlgnstsdata=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cNFE010LOGSTATUSlgnstsdata=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LOGSTATUSLGNSTSDATA",gx.O.AV11cNFE010LOGSTATUSlgnstsdata,0)},c2v:function(){gx.O.AV11cNFE010LOGSTATUSlgnstsdata=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCNFE010LOGSTATUSLGNSTSDATA")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKNFE010LOGSTATUSLGNSTSSEQ", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNFE010LOGSTATUSLGNSTSSEQ",gxz:"ZV12cNFE010LOGSTATUSlgnstsseq",gxold:"OV12cNFE010LOGSTATUSlgnstsseq",gxvar:"AV12cNFE010LOGSTATUSlgnstsseq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cNFE010LOGSTATUSlgnstsseq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cNFE010LOGSTATUSlgnstsseq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCNFE010LOGSTATUSLGNSTSSEQ",gx.O.AV12cNFE010LOGSTATUSlgnstsseq,0)},c2v:function(){gx.O.AV12cNFE010LOGSTATUSlgnstsseq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNFE010LOGSTATUSLGNSTSSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV21Linkselection_GXI)},c2v:function(){gx.O.AV21Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV21Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSEMPCODIGO",gxz:"Z7653NFE010LOGSTATUSempcodigo",gxold:"O7653NFE010LOGSTATUSempcodigo",gxvar:"A7653NFE010LOGSTATUSempcodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7653NFE010LOGSTATUSempcodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7653NFE010LOGSTATUSempcodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010LOGSTATUSEMPCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A7653NFE010LOGSTATUSempcodigo,0)},c2v:function(){gx.O.A7653NFE010LOGSTATUSempcodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFE010LOGSTATUSEMPCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSNTFNUMERO",gxz:"Z7654NFE010LOGSTATUSntfnumero",gxold:"O7654NFE010LOGSTATUSntfnumero",gxvar:"A7654NFE010LOGSTATUSntfnumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7654NFE010LOGSTATUSntfnumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7654NFE010LOGSTATUSntfnumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010LOGSTATUSNTFNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A7654NFE010LOGSTATUSntfnumero,0)},c2v:function(){gx.O.A7654NFE010LOGSTATUSntfnumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFE010LOGSTATUSNTFNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSNTFSERIE",gxz:"Z7655NFE010LOGSTATUSntfserie",gxold:"O7655NFE010LOGSTATUSntfserie",gxvar:"A7655NFE010LOGSTATUSntfserie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7655NFE010LOGSTATUSntfserie=Value},v2z:function(Value){gx.O.Z7655NFE010LOGSTATUSntfserie=Value},v2c:function(row){gx.fn.setGridControlValue("NFE010LOGSTATUSNTFSERIE",row || gx.fn.currentGridRowImpl(51),gx.O.A7655NFE010LOGSTATUSntfserie,0)},c2v:function(){gx.O.A7655NFE010LOGSTATUSntfserie=this.val()},val:function(row){return gx.fn.getGridControlValue("NFE010LOGSTATUSNTFSERIE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSLGNCODIGO",gxz:"Z7656NFE010LOGSTATUSlgncodigo",gxold:"O7656NFE010LOGSTATUSlgncodigo",gxvar:"A7656NFE010LOGSTATUSlgncodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7656NFE010LOGSTATUSlgncodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7656NFE010LOGSTATUSlgncodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010LOGSTATUSLGNCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A7656NFE010LOGSTATUSlgncodigo,0)},c2v:function(){gx.O.A7656NFE010LOGSTATUSlgncodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFE010LOGSTATUSLGNCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSSTSRETCOD",gxz:"Z7657NFE010LOGSTATUSstsretcod",gxold:"O7657NFE010LOGSTATUSstsretcod",gxvar:"A7657NFE010LOGSTATUSstsretcod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7657NFE010LOGSTATUSstsretcod=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7657NFE010LOGSTATUSstsretcod=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010LOGSTATUSSTSRETCOD",row || gx.fn.currentGridRowImpl(51),gx.O.A7657NFE010LOGSTATUSstsretcod,0)},c2v:function(){gx.O.A7657NFE010LOGSTATUSstsretcod=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NFE010LOGSTATUSSTSRETCOD",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NFE010LOGSTATUSLGNSTSDATA",gxz:"Z7658NFE010LOGSTATUSlgnstsdata",gxold:"O7658NFE010LOGSTATUSlgnstsdata",gxvar:"A7658NFE010LOGSTATUSlgnstsdata",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7658NFE010LOGSTATUSlgnstsdata=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7658NFE010LOGSTATUSlgnstsdata=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("NFE010LOGSTATUSLGNSTSDATA",row || gx.fn.currentGridRowImpl(51),gx.O.A7658NFE010LOGSTATUSlgnstsdata,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7658NFE010LOGSTATUSlgnstsdata=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("NFE010LOGSTATUSLGNSTSDATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cNFE010LOGSTATUSempcodigo = 0 ;
   this.ZV6cNFE010LOGSTATUSempcodigo = 0 ;
   this.OV6cNFE010LOGSTATUSempcodigo = 0 ;
   this.AV7cNFE010LOGSTATUSntfnumero = 0 ;
   this.ZV7cNFE010LOGSTATUSntfnumero = 0 ;
   this.OV7cNFE010LOGSTATUSntfnumero = 0 ;
   this.AV8cNFE010LOGSTATUSntfserie = "" ;
   this.ZV8cNFE010LOGSTATUSntfserie = "" ;
   this.OV8cNFE010LOGSTATUSntfserie = "" ;
   this.AV9cNFE010LOGSTATUSlgncodigo = 0 ;
   this.ZV9cNFE010LOGSTATUSlgncodigo = 0 ;
   this.OV9cNFE010LOGSTATUSlgncodigo = 0 ;
   this.AV10cNFE010LOGSTATUSstsretcod = 0 ;
   this.ZV10cNFE010LOGSTATUSstsretcod = 0 ;
   this.OV10cNFE010LOGSTATUSstsretcod = 0 ;
   this.AV11cNFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.ZV11cNFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.OV11cNFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.AV12cNFE010LOGSTATUSlgnstsseq = 0 ;
   this.ZV12cNFE010LOGSTATUSlgnstsseq = 0 ;
   this.OV12cNFE010LOGSTATUSlgnstsseq = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7653NFE010LOGSTATUSempcodigo = 0 ;
   this.O7653NFE010LOGSTATUSempcodigo = 0 ;
   this.Z7654NFE010LOGSTATUSntfnumero = 0 ;
   this.O7654NFE010LOGSTATUSntfnumero = 0 ;
   this.Z7655NFE010LOGSTATUSntfserie = "" ;
   this.O7655NFE010LOGSTATUSntfserie = "" ;
   this.Z7656NFE010LOGSTATUSlgncodigo = 0 ;
   this.O7656NFE010LOGSTATUSlgncodigo = 0 ;
   this.Z7657NFE010LOGSTATUSstsretcod = 0 ;
   this.O7657NFE010LOGSTATUSstsretcod = 0 ;
   this.Z7658NFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.O7658NFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.AV6cNFE010LOGSTATUSempcodigo = 0 ;
   this.AV7cNFE010LOGSTATUSntfnumero = 0 ;
   this.AV8cNFE010LOGSTATUSntfserie = "" ;
   this.AV9cNFE010LOGSTATUSlgncodigo = 0 ;
   this.AV10cNFE010LOGSTATUSstsretcod = 0 ;
   this.AV11cNFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.AV12cNFE010LOGSTATUSlgnstsseq = 0 ;
   this.AV13pNFE010LOGSTATUSempcodigo = 0 ;
   this.AV14pNFE010LOGSTATUSntfnumero = 0 ;
   this.AV15pNFE010LOGSTATUSntfserie = "" ;
   this.AV16pNFE010LOGSTATUSlgncodigo = 0 ;
   this.AV17pNFE010LOGSTATUSstsretcod = 0 ;
   this.AV18pNFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.A7659NFE010LOGSTATUSlgnstsseq = 0 ;
   this.AV5LinkSelection = "" ;
   this.A7653NFE010LOGSTATUSempcodigo = 0 ;
   this.A7654NFE010LOGSTATUSntfnumero = 0 ;
   this.A7655NFE010LOGSTATUSntfserie = "" ;
   this.A7656NFE010LOGSTATUSlgncodigo = 0 ;
   this.A7657NFE010LOGSTATUSstsretcod = 0 ;
   this.A7658NFE010LOGSTATUSlgnstsdata = gx.date.nullDate() ;
   this.Events = {"e131ub2_client": ["ENTER", true] ,"e141ub1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010LOGSTATUSempcodigo',fld:'vCNFE010LOGSTATUSEMPCODIGO'},{av:'AV7cNFE010LOGSTATUSntfnumero',fld:'vCNFE010LOGSTATUSNTFNUMERO'},{av:'AV8cNFE010LOGSTATUSntfserie',fld:'vCNFE010LOGSTATUSNTFSERIE'},{av:'AV9cNFE010LOGSTATUSlgncodigo',fld:'vCNFE010LOGSTATUSLGNCODIGO'},{av:'AV10cNFE010LOGSTATUSstsretcod',fld:'vCNFE010LOGSTATUSSTSRETCOD'},{av:'AV11cNFE010LOGSTATUSlgnstsdata',fld:'vCNFE010LOGSTATUSLGNSTSDATA'},{av:'AV12cNFE010LOGSTATUSlgnstsseq',fld:'vCNFE010LOGSTATUSLGNSTSSEQ'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7653NFE010LOGSTATUSempcodigo',fld:'NFE010LOGSTATUSEMPCODIGO'},{av:'A7654NFE010LOGSTATUSntfnumero',fld:'NFE010LOGSTATUSNTFNUMERO'},{av:'A7655NFE010LOGSTATUSntfserie',fld:'NFE010LOGSTATUSNTFSERIE'},{av:'A7656NFE010LOGSTATUSlgncodigo',fld:'NFE010LOGSTATUSLGNCODIGO'},{av:'A7657NFE010LOGSTATUSstsretcod',fld:'NFE010LOGSTATUSSTSRETCOD'},{av:'A7658NFE010LOGSTATUSlgnstsdata',fld:'NFE010LOGSTATUSLGNSTSDATA'}],[{av:'AV13pNFE010LOGSTATUSempcodigo',fld:'vPNFE010LOGSTATUSEMPCODIGO'},{av:'AV14pNFE010LOGSTATUSntfnumero',fld:'vPNFE010LOGSTATUSNTFNUMERO'},{av:'AV15pNFE010LOGSTATUSntfserie',fld:'vPNFE010LOGSTATUSNTFSERIE'},{av:'AV16pNFE010LOGSTATUSlgncodigo',fld:'vPNFE010LOGSTATUSLGNCODIGO'},{av:'AV17pNFE010LOGSTATUSstsretcod',fld:'vPNFE010LOGSTATUSSTSRETCOD'},{av:'AV18pNFE010LOGSTATUSlgnstsdata',fld:'vPNFE010LOGSTATUSLGNSTSDATA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010LOGSTATUSempcodigo',fld:'vCNFE010LOGSTATUSEMPCODIGO'},{av:'AV7cNFE010LOGSTATUSntfnumero',fld:'vCNFE010LOGSTATUSNTFNUMERO'},{av:'AV8cNFE010LOGSTATUSntfserie',fld:'vCNFE010LOGSTATUSNTFSERIE'},{av:'AV9cNFE010LOGSTATUSlgncodigo',fld:'vCNFE010LOGSTATUSLGNCODIGO'},{av:'AV10cNFE010LOGSTATUSstsretcod',fld:'vCNFE010LOGSTATUSSTSRETCOD'},{av:'AV11cNFE010LOGSTATUSlgnstsdata',fld:'vCNFE010LOGSTATUSLGNSTSDATA'},{av:'AV12cNFE010LOGSTATUSlgnstsseq',fld:'vCNFE010LOGSTATUSLGNSTSSEQ'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010LOGSTATUSempcodigo',fld:'vCNFE010LOGSTATUSEMPCODIGO'},{av:'AV7cNFE010LOGSTATUSntfnumero',fld:'vCNFE010LOGSTATUSNTFNUMERO'},{av:'AV8cNFE010LOGSTATUSntfserie',fld:'vCNFE010LOGSTATUSNTFSERIE'},{av:'AV9cNFE010LOGSTATUSlgncodigo',fld:'vCNFE010LOGSTATUSLGNCODIGO'},{av:'AV10cNFE010LOGSTATUSstsretcod',fld:'vCNFE010LOGSTATUSSTSRETCOD'},{av:'AV11cNFE010LOGSTATUSlgnstsdata',fld:'vCNFE010LOGSTATUSLGNSTSDATA'},{av:'AV12cNFE010LOGSTATUSlgnstsseq',fld:'vCNFE010LOGSTATUSLGNSTSSEQ'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010LOGSTATUSempcodigo',fld:'vCNFE010LOGSTATUSEMPCODIGO'},{av:'AV7cNFE010LOGSTATUSntfnumero',fld:'vCNFE010LOGSTATUSNTFNUMERO'},{av:'AV8cNFE010LOGSTATUSntfserie',fld:'vCNFE010LOGSTATUSNTFSERIE'},{av:'AV9cNFE010LOGSTATUSlgncodigo',fld:'vCNFE010LOGSTATUSLGNCODIGO'},{av:'AV10cNFE010LOGSTATUSstsretcod',fld:'vCNFE010LOGSTATUSSTSRETCOD'},{av:'AV11cNFE010LOGSTATUSlgnstsdata',fld:'vCNFE010LOGSTATUSLGNSTSDATA'},{av:'AV12cNFE010LOGSTATUSlgnstsseq',fld:'vCNFE010LOGSTATUSLGNSTSSEQ'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cNFE010LOGSTATUSempcodigo',fld:'vCNFE010LOGSTATUSEMPCODIGO'},{av:'AV7cNFE010LOGSTATUSntfnumero',fld:'vCNFE010LOGSTATUSNTFNUMERO'},{av:'AV8cNFE010LOGSTATUSntfserie',fld:'vCNFE010LOGSTATUSNTFSERIE'},{av:'AV9cNFE010LOGSTATUSlgncodigo',fld:'vCNFE010LOGSTATUSLGNCODIGO'},{av:'AV10cNFE010LOGSTATUSstsretcod',fld:'vCNFE010LOGSTATUSSTSRETCOD'},{av:'AV11cNFE010LOGSTATUSlgnstsdata',fld:'vCNFE010LOGSTATUSLGNSTSDATA'},{av:'AV12cNFE010LOGSTATUSlgnstsseq',fld:'vCNFE010LOGSTATUSLGNSTSSEQ'}],[]];
   this.setVCMap("AV13pNFE010LOGSTATUSempcodigo", "vPNFE010LOGSTATUSEMPCODIGO", 0, "int");
   this.setVCMap("AV14pNFE010LOGSTATUSntfnumero", "vPNFE010LOGSTATUSNTFNUMERO", 0, "int");
   this.setVCMap("AV15pNFE010LOGSTATUSntfserie", "vPNFE010LOGSTATUSNTFSERIE", 0, "char");
   this.setVCMap("AV16pNFE010LOGSTATUSlgncodigo", "vPNFE010LOGSTATUSLGNCODIGO", 0, "int");
   this.setVCMap("AV17pNFE010LOGSTATUSstsretcod", "vPNFE010LOGSTATUSSTSRETCOD", 0, "int");
   this.setVCMap("AV18pNFE010LOGSTATUSlgnstsdata", "vPNFE010LOGSTATUSLGNSTSDATA", 0, "dtime");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0g30());