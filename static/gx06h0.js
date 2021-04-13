/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:17.55
*/
gx.evt.autoSkip = false;
gx.define('gx06h0', false, function () {
   this.ServerClass =  "gx06h0" ;
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
      this.AV12pProcessoRotina=gx.fn.getControlValue("vPPROCESSOROTINA") ;
      this.AV13pProcessoId=gx.fn.getIntegerValue("vPPROCESSOID",'.') ;
      this.AV14pErroProcessoSequencia=gx.fn.getIntegerValue("vPERROPROCESSOSEQUENCIA",'.') ;
   };
   this.e131ks2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ks1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx06h0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addComboBox(1543,48,"PROCESSOROTINA","Rotina","ProcessoRotina","svchar",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1544,49,"PROCESSOID","Número do Processo","","ProcessoId","int",0,"px",6,6,"right",null,[],1544,"ProcessoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1549,50,"ERROPROCESSOSEQUENCIA","Sequência","","ErroProcessoSequencia","int",0,"px",4,4,"right",null,[],1549,"ErroProcessoSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1550,51,"ERROPROCESSOID","Código do Erro","Selecionar","ErroProcessoId","int",0,"px",4,4,"right",null,[],1550,"ErroProcessoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1552,52,"ERROPROCESSODATAHORAALT","Data/Hora Alteração","","ErroProcessoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],1552,"ErroProcessoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1553,53,"ERROPROCESSOUSUARIOALT","Usuário Alteração","","ErroProcessoUsuarioAlt","char",0,"px",12,12,"left",null,[],1553,"ErroProcessoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPROCESSOROTINA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROCESSOROTINA",gxz:"ZV6cProcessoRotina",gxold:"OV6cProcessoRotina",gxvar:"AV6cProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV6cProcessoRotina=Value},v2z:function(Value){gx.O.ZV6cProcessoRotina=Value},v2c:function(){gx.fn.setComboBoxValue("vCPROCESSOROTINA",gx.O.AV6cProcessoRotina)},c2v:function(){gx.O.AV6cProcessoRotina=this.val()},val:function(){return gx.fn.getControlValue("vCPROCESSOROTINA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPROCESSOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROCESSOID",gxz:"ZV7cProcessoId",gxold:"OV7cProcessoId",gxvar:"AV7cProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROCESSOID",gx.O.AV7cProcessoId,0)},c2v:function(){gx.O.AV7cProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKERROPROCESSOSEQUENCIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCERROPROCESSOSEQUENCIA",gxz:"ZV8cErroProcessoSequencia",gxold:"OV8cErroProcessoSequencia",gxvar:"AV8cErroProcessoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cErroProcessoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cErroProcessoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCERROPROCESSOSEQUENCIA",gx.O.AV8cErroProcessoSequencia,0)},c2v:function(){gx.O.AV8cErroProcessoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCERROPROCESSOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKERROPROCESSOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCERROPROCESSOID",gxz:"ZV9cErroProcessoId",gxold:"OV9cErroProcessoId",gxvar:"AV9cErroProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cErroProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cErroProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCERROPROCESSOID",gx.O.AV9cErroProcessoId,0)},c2v:function(){gx.O.AV9cErroProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCERROPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKERROPROCESSODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCERROPROCESSODATAHORAALT",gxz:"ZV10cErroProcessoDataHoraAlt",gxold:"OV10cErroProcessoDataHoraAlt",gxvar:"AV10cErroProcessoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cErroProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cErroProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCERROPROCESSODATAHORAALT",gx.O.AV10cErroProcessoDataHoraAlt,0)},c2v:function(){gx.O.AV10cErroProcessoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCERROPROCESSODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKERROPROCESSOUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCERROPROCESSOUSUARIOALT",gxz:"ZV11cErroProcessoUsuarioAlt",gxold:"OV11cErroProcessoUsuarioAlt",gxvar:"AV11cErroProcessoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cErroProcessoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cErroProcessoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCERROPROCESSOUSUARIOALT",gx.O.AV11cErroProcessoUsuarioAlt,0)},c2v:function(){gx.O.AV11cErroProcessoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCERROPROCESSOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOROTINA",gxz:"Z1543ProcessoRotina",gxold:"O1543ProcessoRotina",gxvar:"A1543ProcessoRotina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1543ProcessoRotina=Value},v2z:function(Value){gx.O.Z1543ProcessoRotina=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROCESSOROTINA",row || gx.fn.currentGridRowImpl(46),gx.O.A1543ProcessoRotina)},c2v:function(){gx.O.A1543ProcessoRotina=this.val()},val:function(row){return gx.fn.getGridControlValue("PROCESSOROTINA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOID",gxz:"Z1544ProcessoId",gxold:"O1544ProcessoId",gxvar:"A1544ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1544ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1544ProcessoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROCESSOID",row || gx.fn.currentGridRowImpl(46),gx.O.A1544ProcessoId,0)},c2v:function(){gx.O.A1544ProcessoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROCESSOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ERROPROCESSOSEQUENCIA",gxz:"Z1549ErroProcessoSequencia",gxold:"O1549ErroProcessoSequencia",gxvar:"A1549ErroProcessoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1549ErroProcessoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1549ErroProcessoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ERROPROCESSOSEQUENCIA",row || gx.fn.currentGridRowImpl(46),gx.O.A1549ErroProcessoSequencia,0)},c2v:function(){gx.O.A1549ErroProcessoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ERROPROCESSOSEQUENCIA",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ERROPROCESSOID",gxz:"Z1550ErroProcessoId",gxold:"O1550ErroProcessoId",gxvar:"A1550ErroProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1550ErroProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1550ErroProcessoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ERROPROCESSOID",row || gx.fn.currentGridRowImpl(46),gx.O.A1550ErroProcessoId,0)},c2v:function(){gx.O.A1550ErroProcessoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ERROPROCESSOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ERROPROCESSODATAHORAALT",gxz:"Z1552ErroProcessoDataHoraAlt",gxold:"O1552ErroProcessoDataHoraAlt",gxvar:"A1552ErroProcessoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1552ErroProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1552ErroProcessoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ERROPROCESSODATAHORAALT",row || gx.fn.currentGridRowImpl(46),gx.O.A1552ErroProcessoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1552ErroProcessoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ERROPROCESSODATAHORAALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ERROPROCESSOUSUARIOALT",gxz:"Z1553ErroProcessoUsuarioAlt",gxold:"O1553ErroProcessoUsuarioAlt",gxvar:"A1553ErroProcessoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1553ErroProcessoUsuarioAlt=Value},v2z:function(Value){gx.O.Z1553ErroProcessoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("ERROPROCESSOUSUARIOALT",row || gx.fn.currentGridRowImpl(46),gx.O.A1553ErroProcessoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1553ErroProcessoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("ERROPROCESSOUSUARIOALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cProcessoRotina = "" ;
   this.ZV6cProcessoRotina = "" ;
   this.OV6cProcessoRotina = "" ;
   this.AV7cProcessoId = 0 ;
   this.ZV7cProcessoId = 0 ;
   this.OV7cProcessoId = 0 ;
   this.AV8cErroProcessoSequencia = 0 ;
   this.ZV8cErroProcessoSequencia = 0 ;
   this.OV8cErroProcessoSequencia = 0 ;
   this.AV9cErroProcessoId = 0 ;
   this.ZV9cErroProcessoId = 0 ;
   this.OV9cErroProcessoId = 0 ;
   this.AV10cErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.OV10cErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.AV11cErroProcessoUsuarioAlt = "" ;
   this.ZV11cErroProcessoUsuarioAlt = "" ;
   this.OV11cErroProcessoUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1543ProcessoRotina = "" ;
   this.O1543ProcessoRotina = "" ;
   this.Z1544ProcessoId = 0 ;
   this.O1544ProcessoId = 0 ;
   this.Z1549ErroProcessoSequencia = 0 ;
   this.O1549ErroProcessoSequencia = 0 ;
   this.Z1550ErroProcessoId = 0 ;
   this.O1550ErroProcessoId = 0 ;
   this.Z1552ErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.O1552ErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.Z1553ErroProcessoUsuarioAlt = "" ;
   this.O1553ErroProcessoUsuarioAlt = "" ;
   this.AV6cProcessoRotina = "" ;
   this.AV7cProcessoId = 0 ;
   this.AV8cErroProcessoSequencia = 0 ;
   this.AV9cErroProcessoId = 0 ;
   this.AV10cErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.AV11cErroProcessoUsuarioAlt = "" ;
   this.AV12pProcessoRotina = "" ;
   this.AV13pProcessoId = 0 ;
   this.AV14pErroProcessoSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1543ProcessoRotina = "" ;
   this.A1544ProcessoId = 0 ;
   this.A1549ErroProcessoSequencia = 0 ;
   this.A1550ErroProcessoId = 0 ;
   this.A1552ErroProcessoDataHoraAlt = gx.date.nullDate() ;
   this.A1553ErroProcessoUsuarioAlt = "" ;
   this.Events = {"e131ks2_client": ["ENTER", true] ,"e141ks1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cErroProcessoSequencia',fld:'vCERROPROCESSOSEQUENCIA'},{av:'AV9cErroProcessoId',fld:'vCERROPROCESSOID'},{av:'AV10cErroProcessoDataHoraAlt',fld:'vCERROPROCESSODATAHORAALT'},{av:'AV11cErroProcessoUsuarioAlt',fld:'vCERROPROCESSOUSUARIOALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'A1549ErroProcessoSequencia',fld:'ERROPROCESSOSEQUENCIA'}],[{av:'AV12pProcessoRotina',fld:'vPPROCESSOROTINA'},{av:'AV13pProcessoId',fld:'vPPROCESSOID'},{av:'AV14pErroProcessoSequencia',fld:'vPERROPROCESSOSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cErroProcessoSequencia',fld:'vCERROPROCESSOSEQUENCIA'},{av:'AV9cErroProcessoId',fld:'vCERROPROCESSOID'},{av:'AV10cErroProcessoDataHoraAlt',fld:'vCERROPROCESSODATAHORAALT'},{av:'AV11cErroProcessoUsuarioAlt',fld:'vCERROPROCESSOUSUARIOALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cErroProcessoSequencia',fld:'vCERROPROCESSOSEQUENCIA'},{av:'AV9cErroProcessoId',fld:'vCERROPROCESSOID'},{av:'AV10cErroProcessoDataHoraAlt',fld:'vCERROPROCESSODATAHORAALT'},{av:'AV11cErroProcessoUsuarioAlt',fld:'vCERROPROCESSOUSUARIOALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cErroProcessoSequencia',fld:'vCERROPROCESSOSEQUENCIA'},{av:'AV9cErroProcessoId',fld:'vCERROPROCESSOID'},{av:'AV10cErroProcessoDataHoraAlt',fld:'vCERROPROCESSODATAHORAALT'},{av:'AV11cErroProcessoUsuarioAlt',fld:'vCERROPROCESSOUSUARIOALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cProcessoRotina',fld:'vCPROCESSOROTINA'},{av:'AV7cProcessoId',fld:'vCPROCESSOID'},{av:'AV8cErroProcessoSequencia',fld:'vCERROPROCESSOSEQUENCIA'},{av:'AV9cErroProcessoId',fld:'vCERROPROCESSOID'},{av:'AV10cErroProcessoDataHoraAlt',fld:'vCERROPROCESSODATAHORAALT'},{av:'AV11cErroProcessoUsuarioAlt',fld:'vCERROPROCESSOUSUARIOALT'}],[]];
   this.setVCMap("AV12pProcessoRotina", "vPPROCESSOROTINA", 0, "svchar");
   this.setVCMap("AV13pProcessoId", "vPPROCESSOID", 0, "int");
   this.setVCMap("AV14pErroProcessoSequencia", "vPERROPROCESSOSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx06h0());
