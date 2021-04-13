/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:38:36.52
*/
gx.evt.autoSkip = false;
gx.define('hmodaltotalizaaliquota', false, function () {
   this.ServerClass =  "hmodaltotalizaaliquota" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A3997AliquotaReducaoCodigo=gx.fn.getControlValue("ALIQUOTAREDUCAOCODIGO") ;
      this.A5775ReducaoZNumeroLoja=gx.fn.getIntegerValue("REDUCAOZNUMEROLOJA",'.') ;
      this.AV15ReducaoZNumeroLoja=gx.fn.getIntegerValue("vREDUCAOZNUMEROLOJA",'.') ;
      this.A4326ReducaoZSequenciaECF=gx.fn.getIntegerValue("REDUCAOZSEQUENCIAECF",'.') ;
      this.AV14ReducaoZSequenciaECF=gx.fn.getIntegerValue("vREDUCAOZSEQUENCIAECF",'.') ;
      this.A3996ReducaoZData=gx.fn.getDateValue("REDUCAOZDATA") ;
      this.AV13ReducaoZData=gx.fn.getDateValue("vREDUCAOZDATA") ;
      this.A3992AliquotaReducaoValor=gx.fn.getDecimalValue("ALIQUOTAREDUCAOVALOR",'.',',') ;
   };
   this.e111et2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141et2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e151et2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8,9,12,15,17];
   this.GXLastCtrlId =17;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",6,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodaltotalizaaliquota",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Aliquotareducaocodigo",7,"vALIQUOTAREDUCAOCODIGO","Código Alíquota","","AliquotaReducaoCodigo","svchar",0,"px",10,10,"left",null,[],"Aliquotareducaocodigo","AliquotaReducaoCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Aliquotareducaovalor",8,"vALIQUOTAREDUCAOVALOR","Valor Alíquota","","AliquotaReducaoValor","decimal",0,"px",22,22,"right",null,[],"Aliquotareducaovalor","AliquotaReducaoValor",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[7]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vALIQUOTAREDUCAOCODIGO",gxz:"ZV16AliquotaReducaoCodigo",gxold:"OV16AliquotaReducaoCodigo",gxvar:"AV16AliquotaReducaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16AliquotaReducaoCodigo=Value},v2z:function(Value){gx.O.ZV16AliquotaReducaoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("vALIQUOTAREDUCAOCODIGO",row || gx.fn.currentGridRowImpl(6),gx.O.AV16AliquotaReducaoCodigo,0)},c2v:function(){gx.O.AV16AliquotaReducaoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("vALIQUOTAREDUCAOCODIGO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vALIQUOTAREDUCAOVALOR",gxz:"ZV17AliquotaReducaoValor",gxold:"OV17AliquotaReducaoValor",gxvar:"AV17AliquotaReducaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17AliquotaReducaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV17AliquotaReducaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vALIQUOTAREDUCAOVALOR",row || gx.fn.currentGridRowImpl(6),gx.O.AV17AliquotaReducaoValor,2,',')},c2v:function(){gx.O.AV17AliquotaReducaoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vALIQUOTAREDUCAOVALOR",row || gx.fn.currentGridRowImpl(6),'.',',')},nac:gx.falseFn};
   GXValidFnc[9]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[12]={fld:"TABLE6",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTAL",gxz:"ZV18Total",gxold:"OV18Total",gxvar:"AV18Total",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18Total=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV18Total=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTAL",gx.O.AV18Total,2,',')},c2v:function(){gx.O.AV18Total=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTAL",'.',',')},nac:gx.falseFn};
   this.ZV16AliquotaReducaoCodigo = "" ;
   this.OV16AliquotaReducaoCodigo = "" ;
   this.ZV17AliquotaReducaoValor = 0 ;
   this.OV17AliquotaReducaoValor = 0 ;
   this.AV18Total = 0 ;
   this.ZV18Total = 0 ;
   this.OV18Total = 0 ;
   this.AV18Total = 0 ;
   this.AV15ReducaoZNumeroLoja = 0 ;
   this.AV14ReducaoZSequenciaECF = 0 ;
   this.AV13ReducaoZData = gx.date.nullDate() ;
   this.AV16AliquotaReducaoCodigo = "" ;
   this.AV17AliquotaReducaoValor = 0 ;
   this.A5775ReducaoZNumeroLoja = 0 ;
   this.A4326ReducaoZSequenciaECF = 0 ;
   this.A3996ReducaoZData = gx.date.nullDate() ;
   this.A3992AliquotaReducaoValor = 0 ;
   this.A3997AliquotaReducaoCodigo = "" ;
   this.Events = {"e111et2_client": ["'FECHAR'", true] ,"e141et2_client": ["ENTER", true] ,"e151et2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'A3997AliquotaReducaoCodigo',fld:'ALIQUOTAREDUCAOCODIGO'},{av:'A5775ReducaoZNumeroLoja',fld:'REDUCAOZNUMEROLOJA'},{av:'AV15ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA',hsh:true},{av:'A4326ReducaoZSequenciaECF',fld:'REDUCAOZSEQUENCIAECF'},{av:'AV14ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF',hsh:true},{av:'A3996ReducaoZData',fld:'REDUCAOZDATA'},{av:'AV13ReducaoZData',fld:'vREDUCAOZDATA',hsh:true},{av:'A3992AliquotaReducaoValor',fld:'ALIQUOTAREDUCAOVALOR'},{av:'AV18Total',fld:'vTOTAL'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3997AliquotaReducaoCodigo',fld:'ALIQUOTAREDUCAOCODIGO'},{av:'A5775ReducaoZNumeroLoja',fld:'REDUCAOZNUMEROLOJA'},{av:'AV15ReducaoZNumeroLoja',fld:'vREDUCAOZNUMEROLOJA',hsh:true},{av:'A4326ReducaoZSequenciaECF',fld:'REDUCAOZSEQUENCIAECF'},{av:'AV14ReducaoZSequenciaECF',fld:'vREDUCAOZSEQUENCIAECF',hsh:true},{av:'A3996ReducaoZData',fld:'REDUCAOZDATA'},{av:'AV13ReducaoZData',fld:'vREDUCAOZDATA',hsh:true},{av:'A3992AliquotaReducaoValor',fld:'ALIQUOTAREDUCAOVALOR'},{av:'AV18Total',fld:'vTOTAL'}],[{av:'AV16AliquotaReducaoCodigo',fld:'vALIQUOTAREDUCAOCODIGO'},{av:'AV17AliquotaReducaoValor',fld:'vALIQUOTAREDUCAOVALOR'},{av:'AV18Total',fld:'vTOTAL'}]];
   this.setVCMap("A3997AliquotaReducaoCodigo", "ALIQUOTAREDUCAOCODIGO", 0, "svchar");
   this.setVCMap("A5775ReducaoZNumeroLoja", "REDUCAOZNUMEROLOJA", 0, "int");
   this.setVCMap("AV15ReducaoZNumeroLoja", "vREDUCAOZNUMEROLOJA", 0, "int");
   this.setVCMap("A4326ReducaoZSequenciaECF", "REDUCAOZSEQUENCIAECF", 0, "int");
   this.setVCMap("AV14ReducaoZSequenciaECF", "vREDUCAOZSEQUENCIAECF", 0, "int");
   this.setVCMap("A3996ReducaoZData", "REDUCAOZDATA", 0, "date");
   this.setVCMap("AV13ReducaoZData", "vREDUCAOZDATA", 0, "date");
   this.setVCMap("A3992AliquotaReducaoValor", "ALIQUOTAREDUCAOVALOR", 0, "decimal");
   this.setVCMap("A3997AliquotaReducaoCodigo", "ALIQUOTAREDUCAOCODIGO", 0, "svchar");
   this.setVCMap("A5775ReducaoZNumeroLoja", "REDUCAOZNUMEROLOJA", 0, "int");
   this.setVCMap("AV15ReducaoZNumeroLoja", "vREDUCAOZNUMEROLOJA", 0, "int");
   this.setVCMap("A4326ReducaoZSequenciaECF", "REDUCAOZSEQUENCIAECF", 0, "int");
   this.setVCMap("AV14ReducaoZSequenciaECF", "vREDUCAOZSEQUENCIAECF", 0, "int");
   this.setVCMap("A3996ReducaoZData", "REDUCAOZDATA", 0, "date");
   this.setVCMap("AV13ReducaoZData", "vREDUCAOZDATA", 0, "date");
   this.setVCMap("A3992AliquotaReducaoValor", "ALIQUOTAREDUCAOVALOR", 0, "decimal");
   GridContainer.addRefreshingVar({rfrVar:"A3997AliquotaReducaoCodigo"});
   GridContainer.addRefreshingVar({rfrVar:"A5775ReducaoZNumeroLoja"});
   GridContainer.addRefreshingVar({rfrVar:"AV15ReducaoZNumeroLoja"});
   GridContainer.addRefreshingVar({rfrVar:"A4326ReducaoZSequenciaECF"});
   GridContainer.addRefreshingVar({rfrVar:"AV14ReducaoZSequenciaECF"});
   GridContainer.addRefreshingVar({rfrVar:"A3996ReducaoZData"});
   GridContainer.addRefreshingVar({rfrVar:"AV13ReducaoZData"});
   GridContainer.addRefreshingVar({rfrVar:"A3992AliquotaReducaoValor"});
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodaltotalizaaliquota());
